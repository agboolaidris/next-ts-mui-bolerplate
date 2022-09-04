import * as React from 'react';
import type { NextPage } from 'next';
import { Container, Button } from '@mui/material';
import Layout from '../layout';
import { ShowTypography } from '../ui/atoms/shadowText';
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
          variant="contained"
        >
          toggle
        </Button>

        {!authInitialState.isloading && (
          <>
            <ShowTypography>CLICK THE BUTTON</ShowTypography>
          </>
        )}
        {authInitialState.isloading && (
          <>
            <ShowTypography>NEXT TYPESCRIPT MUI TEMPLATE</ShowTypography>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Home;
