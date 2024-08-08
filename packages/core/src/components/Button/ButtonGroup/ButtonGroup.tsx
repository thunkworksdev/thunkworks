import { THUNKWORKS } from '@thunkworks/types';
import { useClassNames } from '@thunkworks/style';
import { ButtonProvider } from '../ButtonContext';
import { Group, GroupProps } from '../../Group';
import { createFactoryPolymorphic } from '../../../factory';

export interface ButtonGroupProps extends GroupProps {}

export type ButtonGroupFactory = THUNKWORKS.Factory<{
  component: 'div';
  reference: HTMLDivElement;
  properties: ButtonGroupProps;
  classNames: THUNKWORKS.ClassNames['ButtonGroup'];
  variant: THUNKWORKS.Variants['ButtonGroup'];
}>;

const defaultClassNames = {
  root: 'thwx-button-group',
};

const defaultProps = {
  classNames: defaultClassNames,
};

export const ButtonGroup = createFactoryPolymorphic<ButtonGroupFactory>((props, ref) => {
  const { as: Component = 'div', children, classNames, variant, ...otherProps } = props;

  const { css } = useClassNames({
    defaultProps,
    classNames,
  });

  return (
    <Group as={Component} ref={ref} className={css.root} {...otherProps}>
      <ButtonProvider value={{}}>{children}</ButtonProvider>
    </Group>
  );
});

ButtonGroup.displayName = '@thunkworks/core/Button.Group';
