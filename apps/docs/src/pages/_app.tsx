import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AppHead, MDXContextProvider } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      <MDXContextProvider>
        <Component {...pageProps} />
      </MDXContextProvider>
    </>
  );
}
