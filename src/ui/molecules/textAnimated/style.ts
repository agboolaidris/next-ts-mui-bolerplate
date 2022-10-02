import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material';

const Light = (theme?: Theme) =>
  keyframes`
    0%,
    80% {
      color: ${theme?.colors.white};
      text-shadow: none;
    }
    100% {
      color: ${theme?.colors.white};
      text-shadow: -0.06em 0 ${theme?.colors.danger},
        0.06em 0 ${theme?.colors.white};
    }

`;
const Moving = keyframes`
0%{
  transform:translate(-100%)
}
100%{
  transform:translate(100%)
}
`;

export const LightText = styled.span<{ delay?: number; theme?: Theme }>`
  animation: ${({ theme }) => Light(theme)} 1s linear infinite;
`;
export const TextStyled = styled.div<{ theme?: Theme }>`
  font-size: 6em;
  color: #333;
  font-weight: 500;
  opacity: 0.1;
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  animation: ${Moving} 7s ease-in infinite;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: none;
  }
`;
