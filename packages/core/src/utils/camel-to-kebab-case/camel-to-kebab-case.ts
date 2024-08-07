import { THUNKWORKS } from '@thunkworks/types';

export const camelToKebabCase: typeof THUNKWORKS.camelToKebabCase = (str) => {
  return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
};
