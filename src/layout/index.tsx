import React, { ReactNode } from 'react';
import { Container } from '@mui/material';
import Header from '../ui/molecules/navbar';

import navItems from '../constants/navItem';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Header items={navItems} />
      <Container sx={{ marginTop: { xs: 4, md: 10 }, marginBottom: 4 }}>
        {children}
      </Container>
    </>
  );
}

export default Layout;
