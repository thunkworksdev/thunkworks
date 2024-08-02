import { Factory, createPolymorphicFactory } from '../../factory';
import { UnstyledButton, UnstyledButtonProps } from '../UnstyledButton';

export interface ButtonProps extends UnstyledButtonProps {
  /** Defines the content placed to the left of the button label. */
  leftContent?: React.ReactNode;

  /** Defines the content placed to the right of the button label. */
  rightContent?: React.ReactNode;
}

type ButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ButtonProps;
}>;

export const Button = createPolymorphicFactory<ButtonFactory>((props, ref) => {
  const {
    loading,
    children,
    disabled,
    leftContent,
    rightContent,
    as: Component = UnstyledButton,
    ...otherProps
  } = props;

  const hasLeftContent = !!leftContent;
  const hasRightContent = !!rightContent;

  return (
    <Component ref={ref} loading={loading} disabled={disabled} {...otherProps}>
      <span>
        {hasLeftContent && <span data-position="left">{leftContent}</span>}

        <span>{children}</span>

        {hasRightContent && <span data-position="right">{rightContent}</span>}
      </span>
    </Component>
  );
});

Button.displayName = '@thunkworks/core/Button';
