import React from 'react';
import { PolymorphPayload, PolymorphRenderType, PolymorphReturnType } from '@thunkworks/types';

export function PolymorphComponent<Payload extends PolymorphPayload>(
  ui: PolymorphRenderType<Payload>
): PolymorphReturnType<Payload> {
  return React.forwardRef(ui) as unknown as PolymorphReturnType<Payload>;
}
