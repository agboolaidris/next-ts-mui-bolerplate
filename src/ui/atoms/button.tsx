import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonUnstyled } from '@mui/base';
import { Theme } from '@mui/material';

export const Button = styled(ButtonUnstyled)<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LinkButton = styled.span<{ theme?: Theme }>`
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.3s ease-out;
  color: ${({ theme }) => theme.colors.danger};
  &:hover {
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.black};
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
