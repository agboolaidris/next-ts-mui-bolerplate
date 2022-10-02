import * as React from 'react';
import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import Layout from '../layout';
import TextAnimated from '../ui/molecules/textAnimated';
import { ShowTypography } from '../ui/atoms/shadowText';
import Link from '../ui/molecules/Link';
import { LinkButton } from '../ui/atoms/button';
import NavigationButton from '../ui/molecules/navigationButton';

const Home: NextPage = () => {
  return (
    <Layout>
      <ShowTypography className="link">I&apos;m Idris Agboola</ShowTypography>
      <Typography variant="body1" sx={{ marginTop: { xs: 2, md: 4 } }}>
        A software engineer and fashion enthusiast residing in Lagos, Nigeria. I
        am highly experienced in developing secure and dynamic applications.
      </Typography>

      <Typography variant="body1" sx={{ marginTop: { xs: 2, md: 4 } }}>
        I love using my skill set to simplify work for enterprises and improve
        the lives of people around me. View my Projects,{' '}
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
        <a
          href="mailto: agboolaisholaidreez@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <LinkButton>agboolaisholaidreez@gmail.com</LinkButton>
        </a>
        .
      </Typography>

      <NavigationButton text="Learn More About Me" href="/about" />

      <TextAnimated text={'IRIS WELCOME YOU'} />
    </Layout>
  );
};

export default Home;
