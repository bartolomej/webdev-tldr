import React from 'react';
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { theme } from "../../styles/theme";


function InlineCode({ children, onExecute, onError = () => null, executable = false }) {

  function execute() {
    try {
      const result = eval(children);
      if (result && onExecute) {
        onExecute(result)
      } else if (result) {
        toast(() => (
          <>
            Rezultat:
            <b style={{marginLeft: 5}}>{result}</b>
          </>
        ), {
          icon: '📋',
          style: {
            border: `1px solid ${theme.colors.dark}`,
            padding: '16px',
            color: theme.colors.dark,
          },
          iconTheme: {
            primary: theme.colors.dark,
            secondary: '#FFFAEE',
          },
        });
      }
    } catch (e) {
      onError(e);
    }
  }

  return (
    <Code
      data-tip={executable && "Pritisni in izvedi kodo."}
      clickable={executable}
      onClick={execute}
    >
      {children}
    </Code>
  )
}

const Code = styled.code`
  border-radius: 5px;
  ${props => props.clickable ? 'cursor: pointer;' : ''}
`


export default InlineCode;
