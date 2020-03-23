import React from 'react';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyle from '../commons/globalStyle';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Normalize />
      <GlobalStyle />
      <Header>HEADER</Header>
      {children}
    </div>
  );
}

const Header = styled.div`
  height: 100px;
  background-color: gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
