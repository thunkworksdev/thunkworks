import Thunkworks from '@thunkworks/types';

interface AppFooterComponent extends Thunkworks.NamedComponent {
  (props: {}): Thunkworks.Node;
}

export const AppFooter: AppFooterComponent = () => {
  return (
    <div>
      <span>App Footer</span>
    </div>
  );
};

AppFooter.displayName = '@thunkworks/docs/AppFooter';
