import { createPolymorphicFactory, Factory } from '../../factory';

export interface UnstyledButtonProps {
  /** Indicates a disabled state for the button. */
  disabled?: boolean;
  /** Indicates a loading state for the button. */
  loading?: boolean;
}

type UnstyledButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  props: UnstyledButtonProps;
  comp: 'button';
}>;

export const UnstyledButton = createPolymorphicFactory<UnstyledButtonFactory>((props, ref) => {
  const { loading, disabled, children, as: Component = 'button', ...otherProps } = props;

  const isLoading = !!loading || undefined;
  const isDisabled = !!disabled || isLoading || undefined;

  return (
    <Component
      ref={ref}
      disabled={isDisabled}
      data-loading={isLoading}
      data-disabled={isDisabled}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

UnstyledButton.displayName = '@thunkworks/core/UnstyledButton';
