import Thunkworks from '@thunkworks/types';
import { useClassNames } from '@thunkworks/style';
import { ButtonGroup } from '#components/Button/ButtonGroup';
import { PolymorphComponent } from '#factory';

export interface ButtonComponents {
  Group: typeof ButtonGroup;
}

export const BUTTON_COMPONENT: Thunkworks.IntrinsicElements['Button'] = 'button';

export const BUTTON_CLASSNAMES: Thunkworks.IntrinsicClassNames['Button'] = {
  root: `thwx-button`,
  label: `thwx-button-label`,
  layout: `thwx-button-layout`,
};

export type ButtonFactory = Thunkworks.PolymorphFactory<{
  ref: Thunkworks.IntrinsicRefs['Button'];
  classNames: Thunkworks.IntrinsicClassNames['Button'];
  components: ButtonComponents;
  component: Thunkworks.IntrinsicElements['Button'];
  props: Thunkworks.ButtonProps;
}>;

export const Button = PolymorphComponent<ButtonFactory>((props, ref) => {
  const {
    children,
    className,
    classNames,
    leftContent,
    rightContent,
    component: Component = 'button',
    ...forwardedProps
  } = props;

  const { cx } = useClassNames(BUTTON_CLASSNAMES, {
    classNames,
    className,
  });

  return (
    <Component {...forwardedProps} ref={ref} {...cx('root')}>
      <span {...cx('layout')}>
        {leftContent && <div data-position="left">{leftContent}</div>}
        <div {...cx('label')}>{children}</div>
        {rightContent && <div data-position="right">{rightContent}</div>}
      </span>
    </Component>
  );
});

Button.Group = ButtonGroup;
Button.displayName = '@thunkworks/core/Button';
