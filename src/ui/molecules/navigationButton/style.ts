import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const NavigationButtonWrapper = styled.button<{ theme?: Theme }>`
  width: max-content;
  display: block;
  max-width: 100%;
  max-width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.danger};
  border-radius: 5px;
  padding: 16px 30px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.danger};
  font-size: 14px;
  //font-weight: bold;
  margin-top: 40px;
`;
