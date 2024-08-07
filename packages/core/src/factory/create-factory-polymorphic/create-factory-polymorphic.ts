import React from 'react';
import { THUNKWORKS } from '@thunkworks/types';

export function createFactoryPolymorphic<P extends THUNKWORKS.Payload>(
  ui: THUNKWORKS.PolymorphicRender<P>
) {
  return React.forwardRef(ui) as unknown as THUNKWORKS.PolymorphicComponent<P>;
}
