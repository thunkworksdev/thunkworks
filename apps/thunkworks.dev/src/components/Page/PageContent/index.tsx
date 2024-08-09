export type PageContentComponent = React.FC<
  Partial<{
    children: React.ReactNode;
  }>
>;

export const PageContent: PageContentComponent = ({ children }) => {
  return <div className="thunkworks-page-content">{children}</div>;
};

PageContent.displayName = '@thunkworks/Page.Content';
