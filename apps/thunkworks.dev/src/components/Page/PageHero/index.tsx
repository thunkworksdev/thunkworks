export type PageHeroComponent = React.FC<
  Partial<{
    children: React.ReactNode;
    title: React.ReactNode;
  }>
>;

export const PageHero: PageHeroComponent = ({ children, title }) => {
  return (
    <section className="thunkworks-page-hero">
      {title}
      {children}
    </section>
  );
};

PageHero.displayName = '@thunkworks/Page.Hero';
