import Link, { type LinkProps } from 'next/link';
import Thunkworks from '@thunkworks/types';
import { PREFIX } from '@thunkworks/core';

export interface MDXLinkComponent extends Thunkworks.NamedComponent {
  (props: Thunkworks.ComponentPropsWithoutRef<'a'> & Partial<LinkProps>): React.ReactNode;
}

export const MDXLink: MDXLinkComponent = ({ href = '/', ...props }) => {
  return <Link href={href} className={`${PREFIX}-mdx-link`} {...props} />;
};

MDXLink.displayName = '@thunkworks/docs/MDXText';
