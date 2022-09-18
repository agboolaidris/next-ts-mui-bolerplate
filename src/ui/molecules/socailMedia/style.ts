import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const SocialMediaWrapper = styled.div<{ theme?: Theme }>`
  position: fixed;
  right: min(5%, 100px);
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .line {
    margin-top: 10px;
    height: 100px;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.white};
  }
  a {
    margin-top: 10px;
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: none;
  }
`;
