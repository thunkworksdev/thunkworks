import { BasePayload, BaseRenderType, BaseReturnType } from '@thunkworks/types';

export function BaseComponent<Payload extends BasePayload>(
  ui: BaseRenderType<Payload>
): BaseReturnType<Payload> {
  return ui as unknown as BaseReturnType<Payload>;
}
