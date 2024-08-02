import React from 'react';
import { keys } from '../../utils';
import { createPolymorphicFactory, Factory } from '../../factory';

export interface TitleElementProps {
  /**
   * Specifies a render type for the component.
   * @default 'h2'
   */
  as?: React.ElementType;
  /**
   * Specifies a shorthand render type for the element. If specified the component will render as a html `h1` element.
   * This will not override the components `as` property.
   * @default undefined
   */
  h1?: boolean;
  /**
   * Specifies a shorthand render type for the element. If specified the component will render as a html `h2` element.
   * This will not override the components `as` property.
   * @default undefined
   */
  h2?: boolean;
  /**
   * Specifies a shorthand render type for the element. If specified the component will render as a html `h3` element.
   * This will not override the components `as` property.
   * @default undefined
   */
  h3?: boolean;
  /**
   * Specifies a shorthand render type for the element. If specified the component will render as a html `h4` element.
   * This will not override the components `as` property.
   * @default undefined
   */
  h4?: boolean;
  /**
   * Specifies a shorthand render type for the element. If specified the component will render as a html `h5` element.
   * This will not override the components `as` property.
   * @default undefined
   */
  h5?: boolean;
  /**
   * Specifies a shorthand render type for the element. If specified the component will render as a html `h6` element.
   * This will not override the components `as` property.
   * @default 'h2'
   */
  h6?: boolean;
}

export interface TitleProps extends TitleElementProps {}

export function findTitleComponent(props: TitleElementProps): React.ElementType {
  const { as, ...otherProps } = props;
  const otherKeys = keys(otherProps);
  const shorthand = otherKeys.find((el) => otherProps[el] !== undefined);
  return shorthand || as || 'h2';
}

type TitleFactory = Factory.Config<{
  ref: HTMLHeadingElement;
  props: TitleProps;
  comp: 'h2';
}>;

export const Title = createPolymorphicFactory<TitleFactory>((props, ref) => {
  const { as, h1, h2, h3, h4, h5, h6, children, ...otherProps } = props;

  const Component = findTitleComponent({ as, h1, h2, h3, h4, h5, h6 });

  return (
    <Component ref={ref} {...otherProps}>
      {children}
    </Component>
  );
});

Title.displayName = '@thunkworks/core/Title';
