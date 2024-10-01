import { PREFIX } from '@thunkworks/core';
import Thunkworks from '@thunkworks/types';

export interface MDXTextComponent extends Thunkworks.NamedComponent {
  (props: Thunkworks.ComponentPropsWithoutRef<'p'>): React.ReactNode;
}

export const MDXText: MDXTextComponent = ({ ...props }) => {
  return <p className={`${PREFIX}-mdx-text`} {...props} />;
};

MDXText.displayName = '@thunkworks/docs/MDXText';
