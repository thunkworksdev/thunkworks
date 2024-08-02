import { forwardRef } from 'react';
import { Factory } from '../types';

export function createFactory<Payload extends Factory.Payload>(ui: Factory.Render<Payload>) {
  const Component = forwardRef(ui) as Factory.Component<Payload>;
  return Component as Factory.Component<Payload> & Factory.Components<Payload['comps']>;
}
