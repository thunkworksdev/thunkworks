import { THUNKWORKS } from '@thunkworks/types';

export const getWindow: typeof THUNKWORKS.getWindow = (node) => {
  return node?.ownerDocument?.defaultView || window;
};
