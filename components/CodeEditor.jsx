import React, {useState, useEffect, useRef} from "react";
import AceEditor from "react-ace";
import styled from 'styled-components'
import {AiOutlineFullscreen, AiOutlineFullscreenExit} from "react-icons/all";

import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-xcode"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/snippets/html"
import "ace-builds/src-noconflict/mode-css"
import "ace-builds/src-noconflict/snippets/css"

function CodeEditor({ open = true, zIndex = 100, onToggle = () => null, code = '', lang = 'html', theme = 'xcode', height = '500px', width = '100%', fullscreen = false }) {
  const [value, setValue] = useState(code);
  const [isFocused, setFocused] = useState(false);
  const [isFullscreen, setFullscreen] = useState(fullscreen);
  const iframeRef = useRef();

  useEffect(() => {
    setValue(code);
  }, [code])

  useEffect(() => {
    setFullscreen(fullscreen);
  }, [fullscreen])

  useEffect(() => {
    if (iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument;
      iframeDoc.open();
      iframeDoc.write(value);
      iframeDoc.close();
    }
  }, [value])

  return (
    <OuterContainer isOpen={open} fullscreen={isFullscreen}>
      <Container zIndex={isFullscreen ? 1000 : zIndex} focused={isFocused} style={{ height: isFullscreen ? '100%' : height, width }}>
        <ControlsWrapper>
          {isFullscreen ? (
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
          )}
        </ControlsWrapper>
        <EditorSide>
          <AceEditor
            mode={lang}
            theme={theme}
            name="UNIQUE_ID_OF_DIV"
            fontSize={16}
            height="100%"
            width="unset"
            editorProps={{ $blockScrolling: true }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={setValue}
            value={value}
            showGutter={false}
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
        <PreviewSide>
          <Iframe ref={iframeRef} />
        </PreviewSide>
      </Container>
    </OuterContainer>
  )
}

const OuterContainer = styled.div`
  display: ${({isOpen}) => isOpen ? `unset` : 'none'};
  ${({fullscreen}) => fullscreen ? `position: absolute; top: 0; bottom: 0; left: 0; right: 0;` : ''}
`;

const Container = styled.div`
  z-index: ${({zIndex}) => zIndex};
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  transition: 0.3s ease-in-out box-shadow;
  box-shadow: ${({theme, focused}) => theme.styles.boxShadow(focused)};
  border: 2px solid ${({theme}) => theme.colors.light}
`;

const ControlsWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
`;

const ControlButton = styled.button`
  display: flex;
  background: white;
  padding: 3px;
  border: 2px solid ${({theme}) => theme.colors.light};
  border-radius: ${({theme}) => theme.constants.smBorderRadius};
`;

const EditorSide = styled.div`
  flex: 1;
  resize: horizontal;
  border-right: 1px solid ${({theme}) => theme.colors.light};
`

const PreviewSide = styled.div`
  flex: 1;
`

const Iframe = styled.iframe`
  height: 100%;
  width: 100%;
  overflow: scroll;
  border: none;
  background: white;
`

export default CodeEditor
