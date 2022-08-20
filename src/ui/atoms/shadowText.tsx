import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { getColor } from '../../assets/thems/color';

export const ShowTypography = styled.h1<{ theme?: Theme }>`
  text-shadow: 4px 4px 2px rgba(98, 86, 100, 1);
  font-size: 4em;
  margin-block-start: 0 !important;
  margin-block-end: 0 !important;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  background-image: linear-gradient(
    -225deg,
    ${getColor('lightBlack')} 0%,
    ${getColor('danger')} 67%,
    ${getColor('yellow')} 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 4em;
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 2em;
  }
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;
