import * as React from 'react';
import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import Layout from '../layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Typography>Home Page</Typography>
    </Layout>
  );
};

export default Home;
