import { THUNKWORKS } from '@thunkworks/types';

export const capitalizeString: typeof THUNKWORKS.capitalizeString = (string) => {
  const clean = string.toLowerCase();
  return clean.charAt(0).toUpperCase() + clean.slice(1, clean.length);
};
