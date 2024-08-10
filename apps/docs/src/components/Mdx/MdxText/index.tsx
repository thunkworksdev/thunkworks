import cx from 'clsx';

type MdxTextProps = React.JSX.IntrinsicElements['p'];
type MdxTextComponent = React.FC<MdxTextProps>;

export const MdxText: MdxTextComponent = ({ className, ...otherProps }) => {
  return <p className={cx('thwx-mdx-text', className)} {...otherProps} />;
};

MdxText.displayName = '@thunkworks/MdxText';
