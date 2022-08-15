import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Layout from '../layout';
import { Button } from '../ui/atoms/button';
import TextAnimated from '../ui/molecules/textAnimated';

const Home: NextPage = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            MUI v5 + Next.js with TypeScript example
          </Typography>
          <Button>HHHHH</Button>
          <TextAnimated />
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
