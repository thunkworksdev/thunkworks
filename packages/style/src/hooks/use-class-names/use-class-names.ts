import clsx from 'clsx';
import { useClassMiddleware } from '../use-class-middleware/use-class-middleware';

interface ClassNameOptions {
  rootKey?: string;
}

interface ClassNameProps<K extends string> {
  classNames?: Partial<Record<K, string>>;
  className?: string;
}

export function useClassNames<K extends string>(
  obj: Record<K, string>,
  props: ClassNameProps<K>,
  options?: ClassNameOptions
) {
  const { className, classNames } = props;
  const { rootKey = 'root' } = options || {};

  const middleware = useClassMiddleware({
    className,
    rootKey,
  });

  const payload = middleware.merge(obj, classNames);

  const parseRoot = (key: K, value: string): string => {
    return key === rootKey ? clsx(value, className) : value;
  };

  const cx = (key: K) => ({
    className: parseRoot(key, payload[key]),
  });

  return { cx };
}
