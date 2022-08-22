import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const SocialIconWrapper = styled.div<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.white};
  // background: ${({ theme }) => theme.colors.black};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  box-shadow: -1px 0px 6px 6px ${({ theme }) => theme.colors.black};
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.danger};
  }
`;
