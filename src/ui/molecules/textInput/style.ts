import styled from '@emotion/styled';
import { Box, Theme } from '@mui/material';

export const TextInputStyled = styled(Box)<{ theme?: Theme }>`
  width: 100%;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.lightBlack};
  padding: 10px;
  color: white;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  input {
    width: 100%;
    height: 100%;
    background: transparent;
    outline: none;
    border: none;
    color: white;
  }
  &:focus-within {
    border: 2px solid ${({ theme }) => theme.colors.danger};
  }
`;
