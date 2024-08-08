import { THUNKWORKS } from '@thunkworks/types';
import { useClassNames } from '@thunkworks/style';
import { RadioProvider } from '../RadioContext';
import { Group, GroupProps } from '../../Group';
import { createFactoryPolymorphic } from '../../../factory';

export interface RadioGroupProps extends GroupProps {}

export type RadioGroupFactory = THUNKWORKS.Factory<{
  component: 'div';
  reference: HTMLDivElement;
  properties: RadioGroupProps;
  classNames: THUNKWORKS.ClassNames['RadioGroup'];
  variant: THUNKWORKS.Variants['RadioGroup'];
}>;

const defaultProps = {
  classNames: {
    root: 'thwx-radio-group',
  },
};

export const RadioGroup = createFactoryPolymorphic<RadioGroupFactory>((props, ref) => {
  const { as: Component = 'div', children, classNames, ...otherProps } = props;

  const { css } = useClassNames({ defaultProps, classNames });

  return (
    <Group as={Component} className={css.root} {...otherProps}>
      <RadioProvider value={{}}>{children}</RadioProvider>
    </Group>
  );
});

RadioGroup.displayName = '@thunkworks/core/Radio.Group';
