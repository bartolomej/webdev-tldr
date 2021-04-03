import React from "react";
import Link from 'next/link'
import styled from "styled-components";

function LangCard({title, href, icon }) {

  const IconComponent = React.cloneElement(icon, {style: {width: 100, height: 100}})

  return (
    <Link href={href}>
      <Container>
        {IconComponent}
        {title}
      </Container>
    </Link>
  )
}

const Container = styled.div`
  padding: 10px;
  background: white;
  box-shadow: ${({theme}) => theme.styles.boxShadow(false)};
  border-radius: ${({theme}) => theme.constants.smBorderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    box-shadow: ${({theme}) => theme.styles.boxShadow(true)};
  }
`;

export default LangCard;
