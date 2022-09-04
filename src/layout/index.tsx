import React, { ReactNode } from 'react';
import { Box, Theme } from '@mui/material';
import styled from '@emotion/styled';
import Header from '../ui/molecules/navbar';

//import "./styles.css";
interface Props {
  children: ReactNode;
}

const Wrap = styled(Box)<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.black};
  padding: 1px 0px;
  height: 100vh;
`;

function Layout({ children }: Props) {
  return (
    <Wrap>
      <Header />
      {children}
    </Wrap>
  );
}

export default Layout;
