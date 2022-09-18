import React, { ReactNode } from 'react';
import { Box, Container, Theme } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import Header from '../ui/molecules/navbar';
import SocailMedia, { SocailMedia2 } from '../ui/molecules/socailMedia';

interface Props {
  children: ReactNode;
}

const Wrap = styled(Box)<{ theme?: Theme }>`
  background: ${({ theme }) => theme.colors.black};
  color: white;
  padding: 1px 0px;
  min-height: 100vh;
  position: relative;
  * {
    font-family: Overpass Mono, monospace, sans-serif;
  }
  a {
    font-size: 1em;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`;

function Example({ children }: Props) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <Wrap>
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
            <SocailMedia sx={{ marginTop: 2 }} />
          </Box>
        </motion.main>
      </Container>
      <SocailMedia2 />
    </Wrap>
  );
}

export default Example;
