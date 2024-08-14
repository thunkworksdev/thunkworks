import { getWindow } from '../get-window/get-window';

export function isHTMLElement(value: unknown): value is HTMLElement {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
