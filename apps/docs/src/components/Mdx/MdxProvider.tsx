import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MdxText } from './MdxText';
import { MdxTitle } from './MdxTitle';
import { MdxLink } from './MdxLink';

type MdxProviderProps = Readonly<{ children: React.ReactNode }>;

export function MdxProvider(props: MdxProviderProps) {
  return (
    <MDXProvider
      components={{
        h1: MdxTitle(1),
        h2: MdxTitle(2),
        h3: MdxTitle(3),
        h4: MdxTitle(4),
        h5: MdxTitle(5),
        h6: MdxTitle(6),
        a: MdxLink,
        p: MdxText,
      }}
    >
      <React.Fragment>{props.children}</React.Fragment>
    </MDXProvider>
  );
}
