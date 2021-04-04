import React from 'react';
import styled from "styled-components";

function Header({ children, backgroundColor }) {

  return (
    <Container background={backgroundColor}>
      <InnerWrapper>
        {children}
      </InnerWrapper>
    </Container>
  )
}

const Container = styled.header`
  margin-bottom: 50px;
  width: 100%;
  min-height: 30vh;
  display: flex;
  overflow: auto;
  background: ${({background, theme}) => background || theme.colors.primary};
  
  h1,p {
    color: ${({theme}) => theme.colors.light};
  }

  h1 {
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.6rem;
    max-width: 600px;
    text-align: center;
  }

  @media (max-width: 700px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const InnerWrapper = styled.div`
  max-width: ${({ theme }) => theme.constants.containerWidth};
  margin: auto;
`;

export default Header;
