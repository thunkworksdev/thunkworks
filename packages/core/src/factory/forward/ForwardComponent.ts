import React from 'react';
import { ForwardPayload, ForwardRenderType, ForwardReturnType } from '@thunkworks/types';

export function ForwardComponent<Payload extends ForwardPayload>(
  ui: ForwardRenderType<Payload>
): ForwardReturnType<Payload> {
  return React.forwardRef(ui) as unknown as ForwardReturnType<Payload>;
}
