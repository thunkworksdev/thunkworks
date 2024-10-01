import Thunkworks from '@thunkworks/types';
import { MDXProvider } from '@mdx-js/react';
import { MDXTitle } from './MdxTitle';
import { MDXLink } from './MdxLink';
import { MDXText } from './MdxText';

interface MDXContextProviderComponent extends Thunkworks.NamedComponent {
  (props: Thunkworks.LayoutProps): Thunkworks.Node;
}

export const MDXContextProvider: MDXContextProviderComponent = ({ children }) => {
  return (
    <MDXProvider
      components={{
        h1: MDXTitle(1),
        h2: MDXTitle(2),
        h3: MDXTitle(3),
        h4: MDXTitle(4),
        h5: MDXTitle(5),
        h6: MDXTitle(6),
        a: MDXLink,
        p: MDXText,
      }}
    >
      <>{children}</>
    </MDXProvider>
  );
};

MDXContextProvider.displayName = '@thunkworks/docs/MDXContextProvider';
