import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const GlobalStyleLayout = styled.div<{ theme?: Theme }>`
  /* * {
    font-family: 'Roboto', sans-serif !important;
    color: ${({ theme }) => theme.colors.white};
  }
  background: ${({ theme }) => theme.colors.black};
  min-height: 100vh;
  position: relative; */
`;
