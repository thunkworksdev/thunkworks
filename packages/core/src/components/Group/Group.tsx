import Thunkworks from '@thunkworks/types';
import { useClassNames } from '@thunkworks/style';
import { PolymorphComponent } from '#factory';

export type GroupFactory = Thunkworks.PolymorphFactory<{
  ref: Thunkworks.IntrinsicRefs['Group'];
  classNames: Thunkworks.IntrinsicClassNames['Group'];
  component: Thunkworks.IntrinsicElements['Group'];
  props: Thunkworks.GroupProps;
}>;

export const GROUP_COMPONENT: Thunkworks.IntrinsicElements['Group'] = 'div';
export const GROUP_CLASSNAMES: Thunkworks.IntrinsicClassNames['Group'] = {
  root: `thwx-group`,
};

export const Group = PolymorphComponent<GroupFactory>((props, ref) => {
  const {
    children,
    className,
    classNames = GROUP_CLASSNAMES,
    component: Component = GROUP_COMPONENT,
    ...forwardedProps
  } = props;

  const { cx } = useClassNames(GROUP_CLASSNAMES, {
    classNames,
    className,
  });

  return (
    <Component {...forwardedProps} {...cx('root')} ref={ref}>
      {children}
    </Component>
  );
});

Group.displayName = '@thunkworks/core/Group';
