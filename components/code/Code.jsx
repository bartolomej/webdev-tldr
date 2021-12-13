import React from 'react';
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { theme } from "../../styles/theme";


function Code({ block = false, code, children, onExecute, onError = () => null, executable = false }) {
  const value = code || children;

  function execute() {
    try {
      const result = eval(value);
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

  function onClick() {
    if (executable) {
      execute();
    }
  }

  return (
    <Container
      data-splitbee-event="Code run"
      data-tip={executable ? "Pritisni in izvedi kodo." : null}
      clickable={executable}
      block={block}
      onClick={onClick}
    >
      {value}
    </Container>
  )
}

function Container({ block, ...props }) {
  return (
    block
      ? <BlockContainer {...props} />
      : <InlineContainer {...props} />
  )
}

const InlineContainer = styled.code`
  border-radius: 5px;
  ${props => props.clickable ? 'cursor: pointer;' : ''}
`

const BlockContainer = styled.pre`
  border-radius: 5px;
  ${props => props.clickable ? 'cursor: pointer;' : ''}
`;


export default Code;
