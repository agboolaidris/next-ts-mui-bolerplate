import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const ListWrapper = styled.div<{ theme?: Theme }>`
  margin-top: 50px;
  .timeline-title {
    font-size: 1.5em;
    font-weight: bold;
  }

  .timeline-items {
    margin: 2em;
    padding: 0.01em 0 3em 2em;
    border-left: 1px solid ${({ theme }) => theme.colors.lightBlack};
    .timeline-item {
      margin-bottom: 2em;
      margin-top: -0.3em;
      & > * {
        margin: 1em 0;
      }
      .item-title {
        font-size: 1em;
        font-weight: bold;
        margin: 0;
        position: relative;
        h3 {
          margin-block-start: 0px !important;
          margin-block-end: 0px !important;
        }

        &::before {
          content: '';
          position: absolute;
          left: -2.35em;
          border: 2px solid ${({ theme }) => theme.colors.white};
          width: 0.7em;
          height: 0.7em;
          border-radius: 50%;
          transform: translate(-0.5px, 0.2em);
        }
      }
      .timeline-item .location {
        clear: both;
        font-size: 0.85em;
        font-style: italic;
      }
    }
  }
`;
