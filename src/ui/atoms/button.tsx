import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { unstable_styleFunctionSx, SxProps } from '@mui/system';

const loadingAnimation = keyframes`
  0% {
    width: 0;
    transform: translateX(0);
    border-radius: 5px 0 0 5px;
  }

  25% {
    width: 100%;
    transform: translateX(0);
    border-radius: 5px 0 0 5px;
  }

  50% {
    width: 100%;
    transform: translateX(100%);
    border-radius: 0 5px 5px 0;
  }

  75% {
    width: 100%;
    transform: translateX(0%);
    border-radius: 0 5px 5px 0;
  }

  100% {
    width: 0;
    transform: translateX(0%);
    border-radius: 5px 0 0 5px;
  }
`;
export const Button = styled.button<{
  theme?: Theme;
  width?: string;
  loading?: Boolean;
  sx?: SxProps;
}>`
  background-color: ${({ theme }) => theme.colors.compliment};
  height: 50px;
  border: none;
  border-radius: 5px;
  width: ${({ width }) => (width ? width : '300px')};
  outline: none;
  position: relative;
  overflow-x: hidden;

  z-index: 1;
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.accent};

  ${({ loading, theme }) =>
    loading &&
    css`
      cursor: not-allowed !important;

      &:hover {
        background-color: ${theme.colors.compliment};
      }
      &::before {
        content: '';
        width: 0%;
        height: 100%;
        background-color: ${theme.colors.accent};
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 5px;
        animation: ${loadingAnimation} 7000ms infinite linear;
        z-index: -1;
      }
    `};
`;
