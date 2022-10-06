import styled from '@emotion/styled';
import { Theme } from '@mui/material';

interface Props {
  theme?: Theme;
}

export const BlogCardWrapper = styled.div<Props>`
  width: 100%;
  transition: all 0.3s ease-in-out;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.darkWhite};
  h2 {
    margin-block-start: 0em !important;
    margin-block-end: 0em !important;
  }
  p {
    color: ${({ theme }) => theme.colors.darkWhite};
    margin-block-start: 0em !important;
    margin-block-end: 0em !important;
    margin-top: 10px !important;
  }
  .timeformat {
    margin-top: 10px;
    margin-block-start: 0em !important;
    margin-block-end: 0em !important;
    margin-top: 10px !important;
    background-color: ${({ theme }) => theme.colors.lightBlack};
    color: ${({ theme }) => theme.colors.white};
    width: max-content;
    padding: 5px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlack};
  }
`;
