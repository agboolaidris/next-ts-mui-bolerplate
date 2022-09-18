import * as React from 'react';
import type { NextPage } from 'next';
import { Container, Typography } from '@mui/material';
import Layout from '../layout';
import TextAnimated from '../ui/molecules/textAnimated';
import { ShowTypography } from '../ui/atoms/shadowText';
import Link from '../ui/molecules/Link';
import { LinkButton } from '../ui/atoms/button';
import LearnMore from '../ui/molecules/learnMore';
import SocailMedia from '../ui/molecules/socailMedia';
import NavigationButton from '../ui/molecules/navigationButton';

const Home: NextPage = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ marginTop: { xs: 5, md: 10 } }}>
        <ShowTypography className="link">I'm Idris Agboola</ShowTypography>
        <Typography variant="body1" sx={{ marginTop: { xs: 2, md: 4 } }}>
          Software Engineer & Fashion enthusiast based in Lagos, Nigeria. Highly
          experienced in developing secure and dynamic applications.
        </Typography>

        <Typography variant="body1" sx={{ marginTop: { xs: 2, md: 4 } }}>
          I love using my skill set to solve problems and improve the lives of
          people around me. View my Projects,{' '}
          <Link href="/">
            <LinkButton>Articles,</LinkButton>
          </Link>
          <Link href="/resume">
            <LinkButton> Resumé,</LinkButton>
          </Link>
          <Link href="/contact">
            <LinkButton> Contact Me,</LinkButton>
          </Link>
          or send me an email at{' '}
          <a href="mailto: agboolaisholaidreez@gmail.com" target="_blank">
            <LinkButton>agboolaisholaidreez@gmail.com</LinkButton>
          </a>
          .
        </Typography>
        {/* <LearnMore href="/about" text="Learn More About Me" /> */}
        <NavigationButton text="Learn More About Me" />
        {/* <SocailMedia /> */}
      </Container>
      <TextAnimated text={'IRIS WELCOME YOU'} />
    </Layout>
  );
};

export default Home;
