import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const ImgBoxOutsideWrapper = styled.div<{ theme?: Theme }>`
  width: 300px;
  height: 300px;
  max-width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.danger};
  border-radius: 10px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 250px;
    height: 250px;
    margin-left: 20px;
  }
`;

export const ImgBoxInsideWrapper = styled.div<{ theme?: Theme }>`
  width: 100%;
  height: 100%;
  max-width: 100%;
  background: ${({ theme }) => theme.colors.danger};
  border-radius: 10px;
  transform: translate(-20px, -20px);
`;
