import React, { useState, useEffect, useRef } from "react";
import AceEditor from "react-ace";
import styled from 'styled-components'
import {
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,
  AiFillStepForward
} from "react-icons/ai";
import { IoPlayOutline } from "react-icons/io5";

// ace common
import "ace-builds/src-noconflict/theme-xcode"
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";

// ace language support
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css"
import "ace-builds/src-noconflict/mode-html"

// ace language snippets
import "ace-builds/src-noconflict/snippets/html"
import "ace-builds/src-noconflict/snippets/css"
import "ace-builds/src-noconflict/snippets/javascript"

// prettier
import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";


const prettierOptions = {
  parser: "html",
  plugins: [parserHtml]
}

function CodeEditor ({
  open = true,
  zIndex = 100,
  onToggle = () => null,
  code = '',
  lang = 'html',
  theme = 'xcode',
  height = '500px',
  width = '100%',
  fullscreen = false,
  autorun = false,
  websitePreview = true
}) {
  const [value, setValue] = useState(code);
  const [isFocused, setFocused] = useState(false);
  const [isFullscreen, setFullscreen] = useState(fullscreen);
  const [syntaxError, setSyntaxError] = useState(null);
  const iframeRef = useRef();

  useEffect(() => {
    setValue(code);
  }, [code])

  useEffect(() => {
    if (iframeRef.current && autorun) {
      updateIframeContent();
    }
    const formatted = formatCode(value);
    if (formatted !== value) {
      // TODO: don't update value with formatted code until cursor offset is not set
      setValue(value);
    }
  }, [value])

  useEffect(() => {
    setFullscreen(fullscreen);
  }, [fullscreen])

  useEffect(() => {
    if (!syntaxError && autorun) {
      updateIframeContent()
    }
  }, [syntaxError])

  useEffect(() => {
    listenIframeEvents();
    window.addEventListener("keydown", onKeyPress);
    return () => window.removeEventListener("keydown", onKeyPress)
  }, [])

  function formatCode (code) {
    // execute formatting in worker if needed
    // https://github.com/prettier/prettier/blob/main/website/playground/WorkerApi.js
    try {
      // TODO: why does prettier not detect or format js or css code ?
      const {
        formatted,
        comments,
        cursorOffset // TODO: move cursor after formatting
      } = prettier.formatWithCursor(code, prettierOptions)
      // reset error when code contains no syntax errors
      setSyntaxError(null);
      return formatted;
    } catch (e) {
      // TODO: highlight line directly in ace code editor ?
      // TODO: use e.loc properties to extract info about error location
      setSyntaxError(e);
      return code;
    }
  }

  function renderCodeFrame () {
    const codeLineRegex = /[ ]+[0-9]+ \|/;
    const errorLineRegex = />[ ]+[0-9]+/;
    const errorPointerLineRegex = /[ ]+\|[ ]+[^]+[.]*/;
    return syntaxError.message.split("\n").map((line, i) => {
      // check if syntax error is on current line
      if (errorLineRegex.test(line)) {
        return <MarkedCodeFrameLine key={i}>{line}</MarkedCodeFrameLine>
      }
      if (codeLineRegex.test(line)) {
        return <CodeFrameLine key={i}>{line}</CodeFrameLine>;
      }
      if (errorPointerLineRegex.test(line)) {
        return <PointerCodeFrameLine key={i}>{line}</PointerCodeFrameLine>
      }
      return <SyntaxErrorMessage key={i}>{line}</SyntaxErrorMessage>
    })
  }

  function listenIframeEvents () {
    window.addEventListener('message', function (response) {
      // Make sure message is from our iframe, extensions like React dev tools might use the same technique and mess up our logs
      if (response.data && response.data.source === 'iframe') {
        const payload = JSON.parse(response.data.message);
        switch (payload.type) {
          case "log":
            return handleLogMessage(payload);
        }
      }
    });
  }

  function handleLogMessage (payload) {
    switch (payload.logLevel) {
      case "warn":
      case "error":
      case "info":
      case "log": {
        // TODO: handle logs
        console.log("log: ", payload.arguments)
      }
    }
  }

  function onKeyPress (e) {
    if (e.key === "Escape") {
      setFullscreen(false)
      if (open) {
        onToggle(false)
      }
    }
  }

  function formatContent () {
    switch (lang) {
      case "javascript":
        return `<script>${value}</script>`
      default:
        return value;
    }
  }

  function internalScripts () {
    return `
      <script>
        // Save the current console log function in case we need it.
        const overwrites = Object.create({
          log: console.log,
          error: console.error,
          warn: console.warn,
          info: console.info,
        });

        function emitMessage(data) {
          window.parent.postMessage(
            {
              source: 'iframe',
              message: JSON.stringify(data),
            },
            '*'
          );
        }

        function emitLog(logLevel) {
          return function (...rest) {
            // window.parent is the parent frame that made this window
            emitMessage({
              type: "log",
              logLevel,
              arguments: rest
            })
            // Finally applying the console statements to saved instance earlier
            overwrites[logLevel].apply(console, arguments);
          };
        }

        // Override the console
        console.log = emitLog("log");
        console.error = emitLog("error");
        console.warn = emitLog("warn");
        console.info = emitLog("info");
      </script>
    `
  }

  function updateIframeContent () {
    const iframeDoc = iframeRef.current.contentDocument;
    const iframeWindow = iframeRef.current.contentWindow;
    iframeDoc.open();
    iframeDoc.write(internalScripts());
    iframeDoc.write(formatContent());
    iframeDoc.close();
    // TODO: fix issues with reload() call
    // iframeWindow.location.reload(); // clean JS context (clear declared variables,..)
  }

  const renderFullscreenToggle = () => isFullscreen ? (
    <ControlButton onClick={() => {
      setFullscreen(false);
      onToggle(false)
    }}>
      <AiOutlineFullscreenExit size={15}/>
    </ControlButton>
  ) : (
    <ControlButton onClick={() => {
      setFullscreen(true);
      onToggle(true)
    }}>
      <AiOutlineFullscreen size={15}/>
    </ControlButton>
  )

  const renderRunButton = () => !autorun && !syntaxError && (
    <ControlButton onClick={() => {
      updateIframeContent()
    }}>
      <IoPlayOutline size={15}/>
    </ControlButton>
  )

  return (
    <OuterContainer zIndex={isFullscreen ? 1000 : zIndex} isOpen={open}
                    fullscreen={isFullscreen}>
      <Container focused={isFocused}
                 style={{ height: isFullscreen ? '100%' : height, width }}>
        <ControlsWrapper>
          {renderRunButton()}
          {renderFullscreenToggle()}
        </ControlsWrapper>
        <EditorSide>
          <AceEditor
            mode={lang}
            theme={theme}
            fontSize={16}
            height="100%"
            width="unset"
            editorProps={{ $blockScrolling: true }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={setValue}
            value={value}
            showGutter={isFullscreen}
            setOptions={{
              useWorker: false,
              displayIndentGuides: true,
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              showLineNumbers: true,
              tabSize: 2
            }}
          />
        </EditorSide>
        {syntaxError ? (
          <PreviewSide>
            <SyntaxErrorWrapper>
              <SyntaxErrorTitle>POZOR NAPAKA V KODI!</SyntaxErrorTitle>
              <pre>{renderCodeFrame()}</pre>
            </SyntaxErrorWrapper>
          </PreviewSide>
        ) : (
          websitePreview ? (
            <PreviewSide>
              <Iframe ref={iframeRef}/>
            </PreviewSide>
          ) : (
            <IframeHidden ref={iframeRef}/>
          )
        )}
      </Container>
    </OuterContainer>
  )
}

const OuterContainer = styled.div`
  z-index: ${({ zIndex }) => zIndex};
  display: ${({ isOpen }) => isOpen ? `block` : 'none'};
  ${({ fullscreen }) => fullscreen ? `position: fixed; top: 0; bottom: 0; left: 0; right: 0;` : ''}
`;

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  transition: 0.3s ease-in-out box-shadow;
  box-shadow: ${({ theme, focused }) => theme.styles.boxShadow(focused)};
  border: 2px solid ${({ theme }) => theme.colors.light}
`;

const ControlsWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  display: flex;
  flex-direction: row;
`;

const ControlButton = styled.button`
  display: flex;
  background: white;
  padding: 3px;
  border: 2px solid ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.constants.smBorderRadius};
  margin-left: ${({ theme }) => theme.gutter.sm};
`;

const EditorSide = styled.div`
  flex: 1;
  resize: horizontal;
  border-right: 1px solid ${({ theme }) => theme.colors.light};
`

const PreviewSide = styled.div`
  flex: 1;
  background: white;
  max-width: 50%;
`

const Iframe = styled.iframe`
  height: 100%;
  width: 100%;
  overflow: scroll;
  border: none;
  background: white;
`

const IframeHidden = styled.iframe`
  display: none;
`;

const SyntaxErrorWrapper = styled.div`
  padding: 5px;
`;

const CodeFrameLine = styled.code`
  border: none;
  background: none;
  display: block;
  color: ${({ theme }) => theme.colors.lightDark}
`;

const MarkedCodeFrameLine = styled(CodeFrameLine)`
  background: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.light};
`;

const PointerCodeFrameLine = styled(CodeFrameLine)`
  color: ${({ theme }) => theme.colors.red};
`;

const SyntaxErrorTitle = styled.b`
  color: ${({ theme }) => theme.colors.red};
  padding: 5px;
`;

const SyntaxErrorMessage = styled(CodeFrameLine)`
  white-space: normal;
  line-height: 1.4;
  margin-bottom: 5px;
`;

export default CodeEditor
