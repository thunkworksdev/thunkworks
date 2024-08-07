import { THUNKWORKS } from '@thunkworks/types';
import { useClassMiddleware } from '../use-class-middleware';

export const useClassNames: typeof THUNKWORKS.useClassNames = (props) => {
  const { defaultProps, classNames } = props;

  const middleware = useClassMiddleware({});

  const css = middleware.merge(defaultProps.classNames, classNames);

  return { css };
};
