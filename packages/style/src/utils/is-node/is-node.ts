import { getWindow } from '../get-window/get-window';

export function isNode(value: unknown): value is Node {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
