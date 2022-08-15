import React, { ReactNode, useState } from 'react';
import { Box, Container, Theme } from '@mui/material';
import { CSSTransition } from 'react-transition-group';
import styled from '@emotion/styled';
import Header from '../ui/molecules/navbar';
import { getColor } from '../assets/thems/color';

//import "./styles.css";
interface Props {
  children: ReactNode;
}

const Wrap = styled(Box)<{ theme?: Theme }>`
  background: ${getColor('black')};
  color: white;
  padding: 1px 0px;
  height: 100vh;

  cursor: url('https://github.com/chenglou/react-motion/raw/master/demos/demo8-draggable-list/cursor.png')
      39 39,
    auto;
  a {
    font-size: 1em;
    text-decoration: none;
    color: ${getColor('white')};
  }
`;

function Example({ children }: Props) {
  return (
    <Wrap>
      <Container>
        <Header />

        {children}
      </Container>
    </Wrap>
  );
}

export default Example;
