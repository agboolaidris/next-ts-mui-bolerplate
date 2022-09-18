import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { Theme } from '@mui/material';
interface Props {
  overLink: boolean;
  theme?: Theme;
}
const Scale = keyframes`
0%{
  width: 50px;
  height: 50px;
}
100%{
  width: 40px;
  height: 40px;
}



`;
export const CustomCusorWrapper = styled.div<Props>`
  z-index: 100;
  position: fixed;
  width: 50px;
  height: 50px;
  animation: ${Scale} 1s ease-in-out infinite;
  .cursor {
    width: inherit;
    height: inherit;
    border: 2px solid ${({ theme }) => theme.colors.danger};
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
  }
  .link-cursor {
    display: none;
  }
  ${({ overLink, theme }) =>
    overLink &&
    css`
      .cursor {
        display: none;
      }

      .link-cursor {
        display: block;
        width: 80px;
        height: 80px;
        background-color: ${theme.colors.danger};
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        &::before {
          content: 'Open';
          display: flex;
          height: inherit;
          color: ${theme.colors.white};
          justify-content: center;
          align-items: center;
        }
      }
    `}

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: none;
    overflow: hidden;
  }
`;
