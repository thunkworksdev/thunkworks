import React from 'react';
import { THUNKWORKS } from '@thunkworks/types';
import { createFactoryPolymorphic } from '../../factory';

export type TextClassNames = 'root';

export type TextProps = { span?: boolean };

type TextFactory = THUNKWORKS.Factory<{
  component: 'p';
  reference: HTMLParagraphElement;
  classNames: TextClassNames;
  properties: TextProps;
}>;

export const Text = createFactoryPolymorphic<TextFactory>((props, ref) => {
  const { as = 'p', span, children, ...otherProps } = props;

  let Component: React.ElementType = as;

  if (span) Component = 'span';

  return (
    <Component ref={ref} {...otherProps}>
      {children}
    </Component>
  );
});

Text.displayName = '@thunkworks/core/Text';
