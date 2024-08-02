import React from 'react';
import { findComponent } from '../../utils';
import { createPolymorphicFactory, Factory } from '../../factory';

export interface TextElementProps {
  /**
   * Specifies a render type for the component.
   * @default 'p'
   */
  as?: React.ElementType;
  /**
   * Specifies a shorthand render type for the element. If specified the component will render as a html `h1` element.
   * This will not override the components `as` property.
   * @default undefined
   */
  span?: boolean;
}

export interface TextProps extends TextElementProps {}

type TextFactory = Factory.Config<{
  ref: HTMLParagraphElement;
  props: TextProps;
  comp: 'p';
}>;

export const Text = createPolymorphicFactory<TextFactory>((props, ref) => {
  const { as, span, children, ...otherProps } = props;

  const Component = findComponent({ as, span, defaultAs: 'p' });

  return (
    <Component ref={ref} {...otherProps}>
      {children}
    </Component>
  );
});

Text.displayName = '@thunkworks/core/Text';
