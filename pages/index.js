import React, {useState} from 'react';
import LangCard from "../components/LangCard";
import styled from "styled-components";
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { Background } from "../components/ui";

export default function Home() {

  return (
    <>
      <Background />
      <MainWrapper>
        <Header>
          <h1>WebDev TLDR;</h1>
          <p>Povzetki o pomembnih temah CSS, HTML.</p>
        </Header>
        <CardWrapper>
          <LangCard href="/html" title="HTML" icon={<FaHtml5 color={'#e96228'}/>}/>
          <LangCard href="/css" title="CSS" icon={<FaCss3Alt color={'#2862e9'}/>}/>
        </CardWrapper>
      </MainWrapper>
  </>
  )
}

const MainWrapper = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;
`

const Header = styled.header`
  & * {
    text-align: left;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  cursor: pointer;
  width: 100%;
`;
