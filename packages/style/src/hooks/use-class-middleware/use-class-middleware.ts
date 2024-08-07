import { THUNKWORKS } from '@thunkworks/types';

export const useClassMiddleware: typeof THUNKWORKS.useClassMiddleware = (options) => {
  const {} = options;

  const merge = <K extends string>(
    current: Record<K, string>,
    updates?: Partial<Record<K, string>>
  ): Record<K, string> => {
    if (!updates) return current;

    return (Object.keys(current) as K[]).reduce(
      (prev, key) => ({
        ...prev,
        ...{ [key]: updates?.[key] || current[key] },
      }),
      {} as Record<K, string>
    );
  };

  return { merge };
};
