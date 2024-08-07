import './ButtonGroup.css';
import { THUNKWORKS } from '@thunkworks/types';
import { useClassNames } from '@thunkworks/style';
import { Group, GroupProps } from '../../Group';
import { createFactoryPolymorphic } from '../../../factory';

export type ButtonGroupClassNames = 'root';

export interface ButtonGroupProps extends GroupProps {}

export type ButtonGroupFactory = THUNKWORKS.Factory<{
  component: 'div';
  reference: HTMLDivElement;
  properties: ButtonGroupProps;
  classNames: ButtonGroupClassNames;
}>;

const defaultProps = {
  classNames: {
    root: 'thwx-button-root',
  },
};

export const ButtonGroup = createFactoryPolymorphic<ButtonGroupFactory>((props, ref) => {
  const { as: Component = 'div', children, classNames, ...otherProps } = props;

  const { css } = useClassNames({
    defaultProps,
    classNames,
  });

  return (
    <Group as={Component} ref={ref} className={css.root} {...otherProps}>
      {children}
    </Group>
  );
});

ButtonGroup.displayName = '@thunkworks/core/Button.Group';
