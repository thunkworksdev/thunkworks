import Thunkworks from '@thunkworks/types';
import { useClassNames } from '@thunkworks/style';
import { PolymorphComponent } from '#factory';

export type TextFactory = Thunkworks.PolymorphFactory<{
  ref: Thunkworks.IntrinsicRefs['Text'];
  classNames: Thunkworks.IntrinsicClassNames['Text'];
  component: Thunkworks.IntrinsicElements['Text'];
  props: Thunkworks.TextProps;
}>;

export const TEXT_CLASSNAMES: Thunkworks.IntrinsicClassNames['Text'] = { root: 'thwx-text' };

export const Text = PolymorphComponent<TextFactory>((props, ref) => {
  const { children, className, classNames, component: Component = 'p', ...forwardedProps } = props;

  const { cx } = useClassNames(TEXT_CLASSNAMES, {
    classNames,
    className,
  });

  return (
    <Component {...forwardedProps} {...cx('root')} ref={ref}>
      {children}
    </Component>
  );
});

Text.displayName = '@thunkworks/core/Text';
