export function getWindow(node: any): typeof window {
  return node?.ownerDocument?.defaultView || window;
}

export function getComputedStyle(element: Element): CSSStyleDeclaration {
  return getWindow(element).getComputedStyle(element);
}

export function isNode(value: unknown): value is Node {
  return value instanceof Node || value instanceof getWindow(value).Node;
}

export function isElement(value: unknown): value is Element {
  return value instanceof Element || value instanceof getWindow(value).Element;
}

export function isHTMLElement(value: unknown): value is HTMLElement {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}

export function camelToKebabCase(value: string): string {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}
