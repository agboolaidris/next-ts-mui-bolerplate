import styled from '@emotion/styled';
import { Box, Theme } from '@mui/material';

export const TextInputStyled = styled(Box)<{ theme?: Theme; error: boolean }>`
  width: 100%;

  color: white;
  input {
    width: 100%;
    height: 50px;
    background: transparent;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.colors.accent50};
    display: block;
    border: 2px solid
      ${({ theme, error }) =>
        error ? theme.colors.compliment : theme.colors.accent50};
    padding: 10px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.accent50};
    }
  }
`;
