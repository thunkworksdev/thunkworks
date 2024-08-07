import './Group.css';
import { THUNKWORKS } from '@thunkworks/types';
import { createFactoryPolymorphic } from '../../factory';

export type GroupClassNames = 'root';

export interface GroupProps {
  orientation?: THUNKWORKS.Orientation | undefined;
}

export type GroupFactory = THUNKWORKS.Factory<{
  component: 'div';
  reference: HTMLDivElement;
  classNames: GroupClassNames;
  properties: GroupProps;
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
