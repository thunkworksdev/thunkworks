import React from 'react';
import { keys } from '../../utils';
import { THUNKWORKS } from '@thunkworks/types';
import { createFactoryPolymorphic } from '../../factory';

export type TitleElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TitleClassNames = 'root';
export type TitleElementProps = Partial<{ [K in TitleElement]: boolean }>;

export type TitleProps = TitleElementProps & {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
};

export type TitleFactory = THUNKWORKS.Factory<{
  component: 'h2';
  reference: HTMLHeadingElement;
  properties: TitleProps;
  classNames: TitleClassNames;
}>;

type TitleAsProps = TitleElementProps & THUNKWORKS.AsProp<TitleElement>;

const findTitleElement = ({ as, ...others }: TitleAsProps) => {
  return keys(others).find((key) => others[key] !== undefined) ?? as ?? 'h2';
};

export const Title = createFactoryPolymorphic<TitleFactory>((props, ref) => {
  const { as, h1, h2, h3, h4, h5, h6, children, ...otherProps } = props;

  const Component = findTitleElement({ as, h1, h2, h3, h4, h5, h6 });

  return (
    <Component ref={ref} {...otherProps}>
      {children}
    </Component>
  );
});

Title.displayName = '@thunkworks/core/Title';
