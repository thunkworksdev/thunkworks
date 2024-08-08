import { THUNKWORKS } from '@thunkworks/types';
import { useClassNames } from '@thunkworks/style';
import { SwitchProvider } from '../SwitchContext';
import { Group, GroupProps } from '../../Group';
import { createFactoryPolymorphic } from '../../../factory';

export interface SwitchGroupProps extends GroupProps {}

export type SwitchGroupFactory = THUNKWORKS.Factory<{
  component: 'div';
  reference: HTMLDivElement;
  properties: SwitchGroupProps;
  classNames: THUNKWORKS.ClassNames['SwitchGroup'];
  variant: THUNKWORKS.Variants['SwitchGroup'];
}>;

const defaultProps = {
  classNames: {
    root: 'thwx-switch-group',
  },
};

export const SwitchGroup = createFactoryPolymorphic<SwitchGroupFactory>((props, ref) => {
  const { as: Component = 'div', children, classNames, ...otherProps } = props;

  const { css } = useClassNames({ defaultProps, classNames });

  return (
    <Group as={Component} className={css.root} {...otherProps}>
      <SwitchProvider value={{}}>{children}</SwitchProvider>
    </Group>
  );
});

SwitchGroup.displayName = '@thunkworks/core/Switch.Group';
