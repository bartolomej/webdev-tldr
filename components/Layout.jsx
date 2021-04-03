import React, { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import {FaCode} from "react-icons/fa";


function Layout({ children }) {
  const [isEditorOpen, setEditorOpen] = useState(false)
  const CodeEditor = dynamic(() => import("../components/CodeEditor"), {ssr: false})

  return (
    <Fragment>
      <OpenCodeEditorBtn onClick={() => setEditorOpen(true)}>
        <FaCode size={20} />
      </OpenCodeEditorBtn>
      <CodeEditor zIndex={200} open={isEditorOpen} fullscreen onToggle={() => setEditorOpen(false)} />
      {children}
    </Fragment>
  )
}

const OpenCodeEditorBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  border-radius: 50%;
  transition: 0.3s ease-in-out color;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Layout;
