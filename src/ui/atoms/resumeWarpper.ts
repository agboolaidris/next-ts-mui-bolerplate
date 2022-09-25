import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const ResumeWrapper = styled.div<{ theme?: Theme; full?: boolean }>`
  transition: all 0.4s ease-in-out;
  max-width: 100%;
  width: 700px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.lightBlack};
  .viewer-wrapper {
    height: 750px;
  }

  * {
    // font-family: Overpass Mono, monospace, sans-serif;
    color: #070d0d !important;
    // mix-blend-mode: difference;
  }
  p,
  span {
    // color: red !important;
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 500px;
  }
`;
