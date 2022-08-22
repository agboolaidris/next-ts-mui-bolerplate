import React, { ReactNode } from 'react';
import { Box, Container, Theme } from '@mui/material';
import styled from '@emotion/styled';
import Header from '../ui/molecules/navbar';

interface Props {
  children: ReactNode;
}

const Wrap = styled(Box)<{ theme?: Theme }>`
  background: ${({ theme }) => theme.colors.black};
  color: white;
  padding: 1px 0px;
  min-height: 100vh;

  a {
    font-size: 1em;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`;

function Example({ children }: Props) {
  return (
    <Wrap>
      <Header />
      {children}
    </Wrap>
  );
}

export default Example;
