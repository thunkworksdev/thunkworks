import '@/styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { AppHead, MDXContextProvider } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <AppHead />
      <MDXContextProvider>
        <Component {...pageProps} />
      </MDXContextProvider>
    </React.Fragment>
  );
}
