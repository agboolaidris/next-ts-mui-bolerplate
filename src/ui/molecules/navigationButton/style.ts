import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { keyframes } from '@emotion/react';

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
export const NavigationButtonWrapper = styled.button<{ theme?: Theme }>`
  width: max-content;
  display: block;
  max-width: 100%;
  max-width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.danger};
  border-radius: 5px;
  padding: 16px 30px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.danger};

  transition: all 0.3s ease-in-out;
  margin-top: 40px;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
  }
`;
