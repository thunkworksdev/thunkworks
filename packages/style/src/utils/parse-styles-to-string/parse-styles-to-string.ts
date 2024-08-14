import { THUNKWORKS } from '@thunkworks/types';
import { parseCssToString } from '../parse-css-to-string/parse-css-to-string';

const getMediaStyles = ({ selector, media }: THUNKWORKS.StyleInput) => {
  const items = !Array.isArray(media) ? [] : media;
  return items.map((item) => {
    return `@media${item.query}{${selector}{${parseCssToString(item.styles)}}}`;
  });
};

const getContainerStyles = ({ selector, container }: THUNKWORKS.StyleInput) => {
  const items = !Array.isArray(container) ? [] : container;
  return items.map((item) => {
    return `@container ${item.query}{${selector}{${parseCssToString(item.styles)}}}`;
  });
};

export function parseStylesToString(input: THUNKWORKS.StyleInput): string {
  const { selector, container, media, styles } = input;

  const baseStyles = styles ? parseCssToString(styles) : '';

  const mediaStyles = getMediaStyles({ selector, media }).join('');

  const containerStyles = getContainerStyles({ selector, container }).join('');

  return `${baseStyles ? `${selector}{${baseStyles}}` : ''}${mediaStyles}${containerStyles}`.trim();
}
