import { getWindow } from '../get-window/get-window';

export function getComputedStyle(element: Element): CSSStyleDeclaration {
  return getWindow(element).getComputedStyle(element);
}
