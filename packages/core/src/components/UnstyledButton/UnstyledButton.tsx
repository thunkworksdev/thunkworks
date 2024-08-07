import { THUNKWORKS } from '@thunkworks/types';
import { createFactoryPolymorphic } from '../../factory';

export type UnstyledButtonClassNames = 'root';

export interface UnstyledButtonProps {
  disabled?: boolean;
  loading?: boolean;
}

export type UnstyledButtonFactory = THUNKWORKS.Factory<{
  component: 'button';
  reference: HTMLButtonElement;
  properties: UnstyledButtonProps;
  classNames: UnstyledButtonClassNames;
}>;

export const UnstyledButton = createFactoryPolymorphic<UnstyledButtonFactory>((props, ref) => {
  const { as: Component = 'button', disabled, loading, children, ...otherProps } = props;

  const isLoading = !!loading || undefined;
  const isDisabled = !!disabled || undefined;

  return (
    <Component
      ref={ref}
      disabled={isDisabled}
      data-disabled={isDisabled}
      data-loading={isLoading}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

UnstyledButton.displayName = '@thunkworks/core/UnstyledButton';
