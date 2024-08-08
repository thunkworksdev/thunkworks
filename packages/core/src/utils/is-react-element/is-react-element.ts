import { THUNKWORKS } from '@thunkworks/types';
import { Fragment, ReactElement } from 'react';

export const isReactElement: typeof THUNKWORKS.isReactElement = (value): value is ReactElement => {
  if (Array.isArray(value) || value === null) return false;

  if (typeof value === 'object' && value.type !== Fragment) return true;

  if (typeof value === 'object' && value.type === Fragment) return false;

  return false;
};
