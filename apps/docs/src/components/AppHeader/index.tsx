import Thunkworks from '@thunkworks/types';

interface AppHeaderComponent extends Thunkworks.NamedComponent {
  (props: {}): Thunkworks.Node;
}

export const AppHeader: AppHeaderComponent = () => {
  return (
    <div>
      <span>App Header</span>
    </div>
  );
};

AppHeader.displayName = '@thunkworks/docs/AppHeader';
