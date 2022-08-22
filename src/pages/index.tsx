import * as React from 'react';
import type { NextPage } from 'next';
import { Container, Typography, Stack } from '@mui/material';
import Layout from '../layout';
import TextAnimated from '../ui/molecules/textAnimated';
import { ShowTypography } from '../ui/atoms/shadowText';
import Link from '../ui/molecules/Link';
import { LinkButton, IconWrapper } from '../ui/atoms/button';
import { FacebookRounded, Twitter } from '@mui/icons-material';
import LearnMore from '../ui/molecules/learnMore';
import SocailMedia from '../ui/molecules/socailMedia';

const Home: NextPage = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ marginTop: { xs: 5, md: 10 } }}>
        <ShowTypography className="link">I'm Idris Agboola</ShowTypography>
        <Typography variant="body1" sx={{ marginTop: { xs: 2, md: 4 } }}>
          Software developer,Javascript engineer, Fashion enthusiast, practicing
          minimalist, and Pop Music & Jazz lover in search of flow.
        </Typography>

        <Typography variant="body1" sx={{ marginTop: { xs: 2, md: 4 } }}>
          I loves using my skill set to solve problems and improve the lives of
          people around me. View my Projects, Articles,{' '}
          <Link href="/">
            <LinkButton>Resumé</LinkButton>
          </Link>
          , Contact Me, or send me an email at agboolaisholaidreez@gmail.com.
        </Typography>
        <LearnMore text="Learn More About Me" />
        <SocailMedia />
      </Container>
      <TextAnimated text={'IRIS WELCOME YOU'} />
    </Layout>
  );
};

export default Home;
