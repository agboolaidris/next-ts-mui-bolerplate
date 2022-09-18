import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const ResumeWrapper = styled.div<{ theme?: Theme; full?: boolean }>`
  transition: all 0.4s ease-in-out;
  max-width: 100%;
  width: 700px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.lightBlack};
  * {
    color: black !important;
  }
  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
  ${({ full }) =>
    full &&
    css`
      margin: 0 auto;
    `}
  .PDFPage {
    margin: auto;
    border-top: 2px solid ${({ theme }) => theme.colors.white};
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  }

  .PDFPageOne {
    width: 100%;
    margin-bottom: 25px;
  }

  .PDFPage > canvas {
    max-width: 100%;
    height: auto !important;
    margin: auto;
  }
`;
