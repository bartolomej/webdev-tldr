import React, { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import {FaCode, FaArrowLeft} from "react-icons/fa";
import { theme } from "../styles/theme";
import { useRouter } from "next/router";


function Layout ({ children }) {
  const router = useRouter();
  const [isEditorOpen, setEditorOpen] = useState(false)
  const CodeEditor = dynamic(() => import("./CodeEditor"), { ssr: false })

  return (
    <Fragment>
      <GoBackButton onClick={() => router.back()}>
        <FaArrowLeft color={theme.colors.light} size={20}/>
      </GoBackButton>
      <OpenCodeButton onClick={() => setEditorOpen(true)}>
        <FaCode color={theme.colors.light} size={20}/>
      </OpenCodeButton>
      <CodeEditor zIndex={200} open={isEditorOpen} fullscreen onToggle={() => setEditorOpen(false)}/>
      {children}
    </Fragment>
  )
}

const NavButton = styled.button`
  position: fixed;
  top: 10px;
  padding: 5px;
  border-radius: 50%;
  transition: 0.3s ease-in-out color;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const OpenCodeButton = styled(NavButton)`
  right: 10px;
`;

const GoBackButton = styled(NavButton)`
  left: 10px;
`;

export default Layout;
