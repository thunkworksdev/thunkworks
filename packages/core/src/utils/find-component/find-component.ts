import { THUNKWORKS } from '@thunkworks/types';

export const findComponent: typeof THUNKWORKS.findComponent = (props, fallback) => {
  const keys = Object.keys(props) as (keyof React.JSX.IntrinsicElements)[];
  return keys.find((key) => props[key] !== undefined) || fallback;
};
