import styled from '@emotion/styled';
import { Box, Theme } from '@mui/material';

export const TextInputStyled = styled(Box)<{ theme?: Theme }>`
  width: 100%;
  height: 200px;
  border: 2px solid ${({ theme }) => theme.colors.lightBlack};

  color: white;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  textarea {
    display: block;
    width: inherit;
    height: inherit;
    padding: 10px;
    background: transparent;
    outline: none;
    border: none;
    color: white;
    resize: none;
  }
  &:focus-within {
    border: 2px solid ${({ theme }) => theme.colors.danger};
  }
`;
