import { THUNKWORKS } from '@thunkworks/types';

export const isEmptyObject: typeof THUNKWORKS.isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};
