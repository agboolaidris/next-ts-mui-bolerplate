import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../assets/theme';
import createEmotionCache from '../lib/createEmotionCache';
import StoreProvider from '../store';
import CustomCursor from '../ui/molecules/customCursor';
import { SnackbarProvider } from 'notistack';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <StoreProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        <ThemeProvider theme={theme}>
          <CustomCursor />
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <SnackbarProvider
            autoHideDuration={6000}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <Component {...pageProps} />
          </SnackbarProvider>
        </ThemeProvider>
      </CacheProvider>
    </StoreProvider>
  );
}
