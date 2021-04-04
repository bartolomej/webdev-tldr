import styled from "styled-components";


export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-color: #e5e5f7;
  filter: opacity(${({opacity}) => opacity || 0.2}) blur(2px);
  opacity: 0.4;
  background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 29px ), repeating-linear-gradient( #444cf755, #444cf7 );
`;
