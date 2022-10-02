import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const NavigationButtonWrapper = styled.button<{ theme?: Theme }>`
  width: max-content;
  display: block;
  max-width: 100%;
  max-width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.danger};
  border-radius: 5px;
  padding: 16px 30px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.danger} !important;
  transition: all 0.3s ease-in-out;
  margin-top: 25px;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`;
