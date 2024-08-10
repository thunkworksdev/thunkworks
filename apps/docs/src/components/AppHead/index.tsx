import Head from 'next/head';

export const AppHead: React.FC<{}> = ({}) => (
  <Head>
    <title>Thunkworks</title>
    <link rel="shortcut icon" href="/images/favicon.svg" />
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
    />
    <meta name="og:image" content="https://placehold.co/600x400" />
    <meta name="og:image:width" content="1280" />
    <meta name="og:image:height" content="640" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@thunkworks" />
    <meta name="og:type" content="website" />
  </Head>
);

AppHead.displayName = '@thunkworks/App.Head';
