import Thunkworks from '@thunkworks/types';
import { PREFIX, Title } from '@thunkworks/core';

const createTitleElement = (level: Thunkworks.TitleLevel): Thunkworks.TitleOrder => {
  return ['h', level].join('') as Thunkworks.TitleOrder;
};

interface MDXTitleComponent extends Thunkworks.NamedComponent {
  (level: Thunkworks.TitleLevel): React.FC<Thunkworks.ComponentPropsWithoutRef<'h2'>>;
}

export const MDXTitle: MDXTitleComponent = (level) => {
  return ({ ...props }) => {
    let Component = createTitleElement(level);
    return <Component className={`${PREFIX}-mdx-title`} {...props} />;
  };
};

MDXTitle.displayName = '@thunkworks/docs/MDXTitle';
