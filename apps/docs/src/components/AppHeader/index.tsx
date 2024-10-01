import Thunkworks from '@thunkworks/types';

interface AppHeaderProps {};

interface AppHeaderComponent extends Thunkworks.NamedComponent {
  (props: AppHeaderProps): React.ReactNode;
}

export const AppHeader: AppHeaderComponent = ({ ...props }) => {
  return (
    <header className='thwx-app-header'>
      <div className='thwx-app-header-layout'>
      </div>
    </header>
  );
};

AppHeader.displayName = '@thwx/App.Header';
