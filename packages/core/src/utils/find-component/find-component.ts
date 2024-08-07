import { THUNKWORKS } from '@thunkworks/types';
import { keys } from '../object-keys/object-keys';

export const findComponent: typeof THUNKWORKS.findComponent = (props) => {
  const { as, defaultAs = 'div', ...otherProps } = props;
  const shortKeys = keys(otherProps);
  const shortAs = shortKeys.find((k) => otherProps[k] !== undefined);
  return as || shortAs || defaultAs;
};
