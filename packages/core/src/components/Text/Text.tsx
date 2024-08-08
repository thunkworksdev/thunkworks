import './Text.css';
import { THUNKWORKS } from '@thunkworks/types';
import { findComponent } from '../../utils';
import { createFactoryPolymorphic } from '../../factory';

export interface TextProps {
  span?: boolean;
}

type TextFactory = THUNKWORKS.Factory<{
  component: 'p';
  reference: HTMLParagraphElement;
  properties: TextProps;
  classNames: THUNKWORKS.ClassNames['Text'];
}>;

export const Text = createFactoryPolymorphic<TextFactory>((props, ref) => {
  const { as = 'p', span, children, ...otherProps } = props;

  const Component = findComponent({ span }, as);

  return (
    <Component ref={ref} {...otherProps}>
      {children}
    </Component>
  );
});

Text.displayName = '@thunkworks/core/Text';
