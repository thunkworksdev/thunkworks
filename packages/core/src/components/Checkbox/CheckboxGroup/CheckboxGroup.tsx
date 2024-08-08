import { THUNKWORKS } from '@thunkworks/types';
import { useClassNames } from '@thunkworks/style';
import { CheckboxProvider } from '../CheckboxContext';
import { Group, GroupProps } from '../../Group';
import { createFactoryPolymorphic } from '../../../factory';

export interface CheckboxGroupProps extends GroupProps {}

export type CheckboxGroupFactory = THUNKWORKS.Factory<{
  component: 'div';
  reference: HTMLDivElement;
  properties: CheckboxGroupProps;
  classNames: THUNKWORKS.ClassNames['CheckboxGroup'];
  variant: THUNKWORKS.Variants['CheckboxGroup'];
}>;

const defaultProps = {
  classNames: {
    root: 'thwx-checkbox-group',
  },
};

export const CheckboxGroup = createFactoryPolymorphic<CheckboxGroupFactory>((props, ref) => {
  const { as: Component = 'div', children, classNames, ...otherProps } = props;

  const { css } = useClassNames({ defaultProps, classNames });

  return (
    <Group as={Component} className={css.root} {...otherProps}>
      <CheckboxProvider value={{}}>{children}</CheckboxProvider>
    </Group>
  );
});

CheckboxGroup.displayName = '@thunkworks/core/Checkbox.Group';
