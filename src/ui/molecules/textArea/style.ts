import styled from '@emotion/styled';
import { Box, Theme } from '@mui/material';

export const TextInputStyled = styled(Box)<{ theme?: Theme; error: boolean }>`
  width: 100%;

  transition: all 0.2s ease-in-out;
  textarea {
    display: block;
    width: inherit;
    height: inherit;
    padding: 10px;
    background: transparent;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    resize: none;
    height: 200px;
    border: 2px solid
      ${({ theme, error }) =>
        error ? theme.colors.danger : theme.colors.lightBlack};
    border-radius: 5px;
    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.darkWhite};
    }
  }
`;
