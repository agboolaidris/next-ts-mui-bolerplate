import * as React from 'react';
import type { NextPage } from 'next';
import { Container, Typography, Stack, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Layout from '../layout';
import TextAnimated from '../ui/molecules/textAnimated';
import { ShowTypography } from '../ui/atoms/shadowText';
import Link from '../ui/molecules/Link';
import { AnimationIconWrapper, LinkButton } from '../ui/atoms/button';
import { useGlobalDispatch, useGlobalState } from '../store';
import { AUTHTYPE } from '../store/reducers/auth';

const Home: NextPage = () => {
  const dispatch = useGlobalDispatch();
  const { authInitialState } = useGlobalState();
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ marginTop: { xs: 5, md: 10 } }}>
        <Button
          onClick={() => dispatch({ payload: {}, type: AUTHTYPE.IS_LOADING })}
        >
          toggle
        </Button>
        {authInitialState.isloading && (
          <>
            <ShowTypography className="link">I'm Idris Agboola</ShowTypography>
            <Typography variant="body1" sx={{ marginTop: { xs: 2, md: 4 } }}>
              Software developer,Javascript engineer, Fashion enthusiast,
              practicing minimalist, and Pop Music & Jazz lover in search of
              flow.
            </Typography>

            <Typography variant="body1" sx={{ marginTop: { xs: 2, md: 4 } }}>
              I loves using his skill set to solve problems and improve the
              lives of people around him. View my Projects, Articles,{' '}
              <Link href="/">
                <LinkButton>Resumé</LinkButton>
              </Link>
              , Contact Me, or send me an email at hellocodewonders@gmail.com.
            </Typography>
            <Link href="/">
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ marginTop: { xs: 1, md: 4 } }}
              >
                <p>Know More About Me</p>
                <AnimationIconWrapper>
                  <ArrowForwardIcon />
                </AnimationIconWrapper>
              </Stack>
            </Link>
          </>
        )}
      </Container>
      <TextAnimated text={'IRIS WELCOME YOU'} />
    </Layout>
  );
};

export default Home;
