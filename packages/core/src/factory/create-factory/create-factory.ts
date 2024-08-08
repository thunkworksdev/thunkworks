import React from 'react';
import { THUNKWORKS } from '@thunkworks/types';

export function createFactory<P extends THUNKWORKS.Payload>(ui: THUNKWORKS.ComponentRender<P>) {
  return React.forwardRef(ui) as THUNKWORKS.Component<P>;
}
