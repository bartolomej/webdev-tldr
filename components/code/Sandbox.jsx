import React from "react";
import styled from "styled-components";



class Sandbox extends React.Component {

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    return false;
  }

  componentDidMount () {
    this._listenIframeEvents();
  }

  renderCode(code) {
    const {contentWindow} = this.iframe;
    this.iframe.onload = () => this.writeContent(code);
    contentWindow.location.reload(); // clean JS context (clear declared variables,..)
  }

  _listenIframeEvents () {
    window.addEventListener('message', (response) => {
      // Make sure message is from our iframe, extensions like React dev tools might use the same technique and mess up our logs
      if (response.data && response.data.source === 'iframe') {
        const payload = JSON.parse(response.data.message);
        switch (payload.type) {
          case "log":
            return this._handleLogMessage(payload);
        }
      }
    });
  }

  _handleLogMessage (payload) {
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

  writeContent(value) {
    const {contentDocument} = this.iframe;
    const {lang} = this.props;

    contentDocument.open();
    contentDocument.write(this.internalScripts());
    contentDocument.write(this.formatContent(lang, value));
    contentDocument.close();
  }

  formatContent (lang, value) {
    switch (lang) {
      case "javascript":
        return `<script>${value}</script>`
      default:
        return value;
    }
  }

  internalScripts () {
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

  render() {
    const {hidden} = this.props;
    return (
      <Iframe hidden={hidden} ref={el => this.iframe = el} />
    )
  }
}

const Iframe = styled.iframe`
  height: 100%;
  width: 100%;
  overflow: scroll;
  border: none;
  background: white;
  ${props => props.hidden ? 'display: none' : ''}
`;


export default Sandbox;
