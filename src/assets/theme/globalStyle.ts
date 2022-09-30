import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const GlobalStyleLayout = styled.div<{ theme?: Theme }>`
  * {
    font-family: Overpass Mono, monospace, sans-serif;
    // text-shadow: none !important;
    color: ${({ theme }) => theme.colors.white};
  }
  background: ${({ theme }) => theme.colors.black};
  padding: 1px 0px;
  min-height: 100vh;
  position: relative;
`;
