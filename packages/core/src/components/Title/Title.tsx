import Thunkworks from '@thunkworks/types';
import { useClassNames } from '@thunkworks/style';
import { PolymorphComponent } from '#factory';

export type TitleFactory = Thunkworks.PolymorphFactory<{
  ref: Thunkworks.IntrinsicRefs['Title'];
  classNames: Thunkworks.IntrinsicClassNames['Title'];
  component: Thunkworks.IntrinsicElements['Title'];
  props: Thunkworks.TitleProps;
}>;

export const TITLE_CLASSNAMES: Thunkworks.IntrinsicClassNames['Title'] = { root: `thwx-title` };

export const Title = PolymorphComponent<TitleFactory>((props, ref) => {
  const { className, classNames, component: Component = 'h2', ...forwardedProps } = props;

  const { cx } = useClassNames(TITLE_CLASSNAMES, { classNames, className });

  return <Component {...forwardedProps} {...cx('root')} ref={ref} />;
});

Title.displayName = '@thunkworks/core/Title';
