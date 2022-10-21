import React from 'react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material';

const BarStyled = styled.div<{ theme?: Theme }>`
  display: flex;
  flex-direction: column;
  height: 15px;
  justify-content: space-between;
  cursor: pointer;
  span {
    width: 25px;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent50};
    &:last-of-type {
      width: 15px;
    }
  }
`;

export function BarIcon() {
  return (
    <BarStyled>
      <span></span>
      <span></span>
      <span></span>
    </BarStyled>
  );
}
