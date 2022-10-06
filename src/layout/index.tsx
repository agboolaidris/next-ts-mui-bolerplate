import React, { ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Header from '../ui/molecules/navbar';
import SocailMedia, { SocailMedia2 } from '../ui/molecules/socailMedia';
import { GlobalStyleLayout } from '../assets/theme/globalStyle';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <GlobalStyleLayout>
      <Header />
      <Container sx={{ marginTop: { xs: 4, md: 10 }, marginBottom: 4 }}>
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: 'linear' }} // Set the transition to linear
          className=""
        >
          {children}
          <Box sx={{ display: { sm: 'none' } }}>
            <SocailMedia sx={{ marginTop: { xs: 2, md: 4 } }} />
          </Box>
        </motion.main>
      </Container>
      <SocailMedia2 />
    </GlobalStyleLayout>
  );
}

export default Layout;
