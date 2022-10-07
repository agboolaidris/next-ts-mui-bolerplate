import React, { ReactNode } from 'react';
import { Container } from '@mui/material';
import Header from '../ui/molecules/navbar';
import { GlobalStyleLayout } from '../assets/theme/globalStyle';
import navItems from '../constants/navItem';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <GlobalStyleLayout>
      <Header items={navItems} />
      <Container sx={{ marginTop: { xs: 4, md: 10 }, marginBottom: 4 }}>
        {children}
      </Container>
    </GlobalStyleLayout>
  );
}

export default Layout;
