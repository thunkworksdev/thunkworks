import './Title.css';
import { THUNKWORKS } from '@thunkworks/types';
import { findComponent } from '../../utils';
import { createFactoryPolymorphic } from '../../factory';

export type TitleProps = THUNKWORKS.TitleElementTypeProps & {};

export type TitleFactory = THUNKWORKS.Factory<{
  component: 'h2';
  reference: HTMLHeadingElement;
  properties: TitleProps;
  classNames: THUNKWORKS.ClassNames['Title'];
}>;

export const Title = createFactoryPolymorphic<TitleFactory>((props, ref) => {
  const { as, h1, h2, h3, h4, h5, h6, children, ...otherProps } = props;

  const Component = findComponent({ h1, h2, h3, h4, h5, h6 }, as || 'h2');

  return (
    <Component ref={ref} {...otherProps}>
      {children}
    </Component>
  );
});

Title.displayName = '@thunkworks/core/Title';
