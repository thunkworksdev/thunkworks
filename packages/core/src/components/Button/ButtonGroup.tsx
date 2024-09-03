import Thunkworks from '@thunkworks/types';
import { useClassNames } from '@thunkworks/style';
import { PolymorphComponent } from '#factory';

export type ButtonGroupFactory = Thunkworks.PolymorphFactory<{
  ref: Thunkworks.IntrinsicRefs['ButtonGroup'];
  classNames: Thunkworks.IntrinsicClassNames['ButtonGroup'];
  component: Thunkworks.IntrinsicElements['ButtonGroup'];
  props: Thunkworks.ButtonGroupProps;
}>;

export const BUTTON_GROUP_CLASSNAMES: Thunkworks.IntrinsicClassNames['ButtonGroup'] = {
  root: `thwx-button-group`,
};

export const ButtonGroup = PolymorphComponent<ButtonGroupFactory>((props, ref) => {
  const { className, classNames, component: Component = 'div', ...forwardedProps } = props;

  const { cx } = useClassNames(BUTTON_GROUP_CLASSNAMES, {
    classNames,
    className,
  });

  return <Component {...forwardedProps} {...cx('root')} ref={ref} />;
});

ButtonGroup.displayName = '@thunkworks/core/ButtonGroup';
