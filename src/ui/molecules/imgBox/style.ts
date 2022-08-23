import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const ImgBoxOutsideWrapper = styled.div<{ theme?: Theme }>`
  width: 300px;
  height: 300px;
  max-width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.danger};
  border-radius: 10px;
`;

export const ImgBoxInsideWrapper = styled.div<{ theme?: Theme }>`
  width: 300px;
  height: 300px;
  max-width: 100%;
  background: ${({ theme }) => theme.colors.danger};
  border-radius: 10px;
  transform: translate(-20px, -20px);
`;
