import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import Toobar from '../components/dashboardLayout/toolbar';
interface StyleProps {
  theme?: Theme;
}

const MyContext = styled.div``;
const Wrapper = styled(Box)<StyleProps>`
  background: ${({ theme }) => theme.palette.grey[300]};
  min-height: 100vh;
  ${MyContext} {
    background-color: yellow;
  }
`;

interface Props {
  children: ReactNode;
}

function Dashboard({ children }: Props) {
  return (
    <Wrapper>
      <Toobar />
      <Container>
        {children}
        <MyContext>I Love React/Next</MyContext>
      </Container>
    </Wrapper>
  );
}

export default Dashboard;
