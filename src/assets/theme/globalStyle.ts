import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const GlobalStyle = styled.div<{ theme?: Theme }>`
  * {
    font-family: Overpass Mono, monospace, sans-serif;
    color: ${({ theme }) => theme.colors.white};
  }
  a {
    font-size: 1em;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`;
