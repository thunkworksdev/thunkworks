import Thunkworks from '@thunkworks/types';
import { useClassNames } from '@thunkworks/style';
import { PolymorphComponent } from '#factory';

export const UNSTYLED_BUTTON_CLASSNAMES: Thunkworks.IntrinsicClassNames['UnstyledButton'] = {
  root: `thwx-button-u`,
};

export type UnstyledButtonFactory = Thunkworks.PolymorphFactory<{
  ref: Thunkworks.IntrinsicRefs['UnstyledButton'];
  classNames: Thunkworks.IntrinsicClassNames['UnstyledButton'];
  component: Thunkworks.IntrinsicElements['UnstyledButton'];
  props: Thunkworks.UnstyledButtonProps;
}>;

export const UnstyledButton = PolymorphComponent<UnstyledButtonFactory>((props, ref) => {
  const { className, classNames, component: Component = 'button', ...forwardedProps } = props;

  const { cx } = useClassNames(UNSTYLED_BUTTON_CLASSNAMES, {
    className,
    classNames,
  });

  return <Component {...forwardedProps} ref={ref} {...cx('root')} />;
});

UnstyledButton.displayName = '@thunkworks/core/UnstyledButton';
