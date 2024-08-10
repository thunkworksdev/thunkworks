import '@/styles/globals.css';
import React from 'react';
import { AppHead, MdxProvider } from '@/components';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <AppHead />
      <MdxProvider>
        <Component {...pageProps} />
      </MdxProvider>
    </React.Fragment>
  );
}
