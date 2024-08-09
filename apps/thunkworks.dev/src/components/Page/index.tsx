import React from 'react';
import { PageNav } from './PageNav';
import { PageMenu } from './PageMenu';
import { PageHero } from './PageHero';
import { PageContent } from './PageContent';

export type PageSubComponent = {
  Nav: typeof PageNav;
  Hero: typeof PageHero;
  Menu: typeof PageMenu;
  Content: typeof PageContent;
};

export type PageComponent = React.FC<
  Partial<{
    children: React.ReactNode;
  }>
>;

export const Page: PageComponent & PageSubComponent = ({ children }) => {
  return <main className="thunkworks-page">{children}</main>;
};

Page.Nav = PageNav;
Page.Hero = PageHero;
Page.Menu = PageMenu;
Page.Content = PageContent;
Page.displayName = '@thunkworks/Page';
