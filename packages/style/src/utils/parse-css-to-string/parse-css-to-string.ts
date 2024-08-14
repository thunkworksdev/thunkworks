import { keys } from '../get-object-keys/get-object-keys';
import { camelToKebabCase } from '../camel-to-kebab-case/camel-to-kebab-case';

export function parseCssToString(css: React.CSSProperties): string {
  return keys(css)
    .reduce((prev, rule) => {
      if (css[rule] !== undefined) {
        return `${prev}${camelToKebabCase(rule)}:${css[rule]}`;
      }
      return prev;
    }, '')
    .trim();
}
