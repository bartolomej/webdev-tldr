import React from 'react';
import styled from "styled-components";

function Header({ children }) {

  return (
    <Container>
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
  background: ${({theme}) => theme.colors.dark};
  
  h1,p {
    color: ${({theme}) => theme.colors.light};
  }

  h1 {
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.6rem;
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
