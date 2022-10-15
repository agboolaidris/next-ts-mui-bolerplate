import * as React from 'react';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../lib/createEmotionCache';
import StoreProvider from '../store';
import { SnackbarProvider } from 'notistack';
import ThemeWrapper from '../assets/theme';
import '../assets/css/app.css';

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
        <ThemeWrapper>
          <SnackbarProvider
            autoHideDuration={6000}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <Component {...pageProps} />
          </SnackbarProvider>
        </ThemeWrapper>
      </CacheProvider>
    </StoreProvider>
  );
}
