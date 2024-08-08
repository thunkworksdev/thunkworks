import { THUNKWORKS } from '@thunkworks/types';

export const createEventCallback: typeof THUNKWORKS.createEventCallback = (
  handler,
  callback,
  options = {}
) => {
  return (event) => {
    if (options.preventDefault) event.preventDefault();
    if (options.stopPropagation) event.stopPropagation();
    callback?.(event);
    handler?.(event);
  };
};
