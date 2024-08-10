import cx from 'clsx';
import React from 'react';
import { Title, TitleProps } from '@thunkworks/core';

type MdxTitleLevel = 1 | 2 | 3 | 4 | 5 | 6;
type MdxTitleOrder = `h${MdxTitleLevel}`;
type MdxTitleProps = React.ComponentPropsWithoutRef<'h2'> & TitleProps;
type MdxTitleComponent = (level: MdxTitleLevel) => React.FC<MdxTitleProps>;

const createTitleElementAs = (level: MdxTitleLevel): MdxTitleOrder => {
  return ['h', level].join('') as MdxTitleOrder;
};

export const MdxTitle: MdxTitleComponent = (level) => {
  return ({ className, ...forwardedProps }) => {
    return (
      <Title
        as={createTitleElementAs(level)}
        className={cx(`thwx-mdx-title`, className)}
        {...forwardedProps}
      />
    );
  };
};
