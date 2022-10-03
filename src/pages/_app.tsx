import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../lib/createEmotionCache';
import StoreProvider from '../store';
import CustomCursor from '../ui/molecules/customCursor';
import { SnackbarProvider } from 'notistack';
import { NextSeo } from 'next-seo';
import ThemeWrapper from '../assets/theme';
import '../assets/css/app.css';
// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Import styles
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const url = process.env.NEXT_PUBLIC_URL;
  const description = `A software engineer and fashion enthusiast residing in Lagos, Nigeria. I
  am highly experienced in developing secure and dynamic applications.`;
  const title = 'Home | Agboola Idris';
  return (
    <StoreProvider>
      <CacheProvider value={emotionCache}>
        <NextSeo
          title={title}
          description={description}
          canonical={url}
          openGraph={{
            url: url,
            title: title,
            description: description,
            images: [
              {
                url: 'https://www.example.ie/og-image-01.jpg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt',
                type: 'image/jpeg',
              },
            ],
            site_name: 'Agboola Idris Portfolio',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
          additionalMetaTags={[
            {
              name: 'viewport',
              content: 'initial-scale=1, width=device-width',
            },
          ]}
        />

        <ThemeWrapper>
          <CustomCursor />

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
