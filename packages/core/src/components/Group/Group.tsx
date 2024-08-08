import './Group.css';
import { THUNKWORKS } from '@thunkworks/types';
import { createFactoryPolymorphic } from '../../factory';

export interface GroupProps {
  orientation?: THUNKWORKS.Orientation | undefined;
}

export type GroupFactory = THUNKWORKS.Factory<{
  component: 'div';
  reference: HTMLDivElement;
  properties: GroupProps;
  classNames: THUNKWORKS.ClassNames['Group'];
  variant: THUNKWORKS.Variants['Group'];
}>;

export const Group = createFactoryPolymorphic<GroupFactory>((props, ref) => {
  const { as: Component = 'div', children, orientation = 'horizontal', ...otherProps } = props;
  return (
    <Component ref={ref} {...otherProps}>
      {children}
    </Component>
  );
});

Group.displayName = '@thunkworks/core/Group';
