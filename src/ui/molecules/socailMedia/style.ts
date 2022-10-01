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

export const SocialMediaIconWrapper = styled.div<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  box-shadow: -1px 0px 4px 4px ${({ theme }) => theme.colors.white};
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.danger};
    box-shadow: -1px 0px 6px 6px ${({ theme }) => theme.colors.danger};
  }
`;
