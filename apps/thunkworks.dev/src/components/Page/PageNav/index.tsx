import Link from 'next/link';
import { THUNKWORKS } from '@thunkworks/types';

export type PageNavComponent = React.FC<
  Partial<{
    items: THUNKWORKS.LinkItem[];
  }>
>;

function parseItem(item: THUNKWORKS.LinkItem): THUNKWORKS.LinkItemParsed {
  const { value, label, ...rest } = item;

  if (label === undefined) {
    return {
      label: (value as number).toString(),
      value: (value as number).toString(),
      ...rest,
    };
  }

  return {
    label,
    value: (value as number).toString(),
    ...rest,
  };
}

export const PageNav: PageNavComponent = ({ items = [] }) => {
  const parsedItems = items.map((i) => parseItem(i));
  return (
    <nav className="thunkworks-page-nav">
      {parsedItems.map((item) => (
        <Link key={item.id} href={item.value}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

PageNav.displayName = '@thunkworks/Page.Nav';
