import React, { forwardRef } from 'react';
import type { PolymorphPayload, PolymorphRenderType, PolymorphReturnType } from '@thunkworks/types';

export function PolymorphComponent<Payload extends PolymorphPayload>(
  ui: PolymorphRenderType<Payload>
): PolymorphReturnType<Payload> {
  return forwardRef(ui as PolymorphRenderType<Payload>) as unknown as PolymorphReturnType<Payload>;
}
