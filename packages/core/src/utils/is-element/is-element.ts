import { THUNKWORKS } from '@thunkworks/types';
import { getWindow } from '../get-window/get-window';

export const isElement: typeof THUNKWORKS.isElement = (value) => {
  return value instanceof Element || value instanceof getWindow(value).Element;
};
