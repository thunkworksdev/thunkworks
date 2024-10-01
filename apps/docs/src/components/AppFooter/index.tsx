import Thunkworks from '@thunkworks/types';

interface AppFooterComponent extends Thunkworks.NamedComponent {
  (props: {}): Thunkworks.Node;
}

export const AppFooter: AppFooterComponent = () => {
  return (
    <div className='thwx-app-footer'>
      <div className='thwx-app-footer-layout'>
      </div>
    </div>
  );
};

AppFooter.displayName = '@thwx/App.Footer';
