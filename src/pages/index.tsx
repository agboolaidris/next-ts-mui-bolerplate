import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Layout from '../layout';
import TextAnimated from '../ui/molecules/textAnimated';

const Home: NextPage = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio impedit
          dolores atque ut, consequatur harum, vel repellat ducimus odit quam
          distinctio, a nemo minima modi laboriosam molestias ad exercitationem
          voluptatibus?
        </p>
      </Container>
      <TextAnimated text={'IRIS WELCOME YOU'} />
    </Layout>
  );
};

export default Home;
