export function keys<T extends Record<string, any>>(obj: T): (keyof T)[] {
  return Object.keys(obj);
}
