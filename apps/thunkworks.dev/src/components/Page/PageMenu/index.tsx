export type PageMenuComponent = React.FC<
  Partial<{
    children: React.ReactNode;
  }>
>;

export const PageMenu: PageMenuComponent = ({ children }) => {
  return <section className="thunkworks-page-menu">{children}</section>;
};
