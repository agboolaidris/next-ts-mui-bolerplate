import React, { ReactNode, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useGlobalDispatch, useGlobalState } from '../../store';
import { darkTheme, lightTheme } from './theme';
import Head from 'next/head';
import { MODETYPE } from '../../store/reducers/mode';

interface Props {
  children: ReactNode;
}
function ThemeWrapper({ children }: Props) {
  const { modeInitialState } = useGlobalState();
  const dispatch = useGlobalDispatch();
  useEffect(() => {
    const mode = localStorage.getItem('mode');

    if (!mode) return;
    if (mode === 'light')
      dispatch({ type: MODETYPE.LIGHT, payload: { mode: '' } });
    else dispatch({ type: MODETYPE.DARK, payload: { mode: '' } });
  }, [dispatch]);

  return (
    <ThemeProvider
      theme={modeInitialState.mode == 'dark' ? darkTheme : lightTheme}
    >
      <Head>
        <meta
          name="theme-color"
          content={
            modeInitialState.mode == 'dark'
              ? darkTheme.colors.black
              : lightTheme.colors.black
          }
        />
      </Head>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeWrapper;
