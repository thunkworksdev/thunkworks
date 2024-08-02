import { keys } from '../object-keys/object-keys';

export type FindComponentOptions = {
  as?: keyof JSX.IntrinsicElements;
  defaultAs?: keyof JSX.IntrinsicElements;
};

export type FindComponentProps = FindComponentOptions &
  Partial<{
    [Key in keyof JSX.IntrinsicElements]: boolean;
  }>;

export function findComponent(props: FindComponentProps): React.ElementType {
  const { as, defaultAs = 'div', ...otherProps } = props;
  const shortKeys = keys(otherProps);
  const shortAs = shortKeys.find((k) => otherProps[k] !== undefined);
  return as || shortAs || defaultAs;
}
