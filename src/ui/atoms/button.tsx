import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonUnstyled } from '@mui/base';
import { Theme } from '@mui/material';

export const Button = styled.button<{
  theme?: Theme;
  width?: string;
  loading: boolean;
}>`
  background-color: ${({ theme }) => theme.colors.white};
  height: 50px;
  border: none;
  border-radius: 5px;
  width: ${({ width }) => (width ? width : '300px')};
  outline: none;
  ${({ loading, theme }) =>
    loading &&
    css`
      background-color: ${theme.colors.white};
      opacity: 0.5;
    `}
`;

export const LinkButton = styled.span<{ theme?: Theme }>`
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.3s ease-out;
  color: ${({ theme }) => theme.colors.danger};
  &:hover {
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Moving = keyframes`
0%{
  transform:translateX(10px);
  
}
100%{
  transform:translateX(0px);

}
`;
export const AnimationIconWrapper = styled.div`
  animation: ${Moving} 1.5s linear infinite;
  transition: all 0.4s ease-in-out;
`;

export const IconWrapper = styled.div<{ theme?: Theme }>`
  transition: all 0.4s ease-in-out;
  &:hover {
    svg {
      transform: scale(1.2);
    }
  }
`;
