import Link from 'next/link';

type MdxLinkProps = React.ComponentPropsWithoutRef<'a'>;
type MdxLinkComponent = React.FC<MdxLinkProps>;

export const MdxLink: MdxLinkComponent = ({ href = '/', children, ...forwardedProps }) => {
  return (
    <Link href={href} {...forwardedProps}>
      {children}
    </Link>
  );
};

MdxLink.displayName = '@thunkworks.MdxLink';
