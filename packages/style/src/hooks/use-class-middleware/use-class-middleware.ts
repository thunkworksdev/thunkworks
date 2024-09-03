export function useClassMiddleware(options: { rootKey?: string; className?: string }) {
  const { className, rootKey = 'root' } = options;

  const keys = <K extends string>(obj: Record<K, string>): K[] => Object.keys(obj) as K[];

  const merge = <K extends string>(
    current: Record<K, string>,
    update?: Partial<Record<K, string>>
  ) => {
    return keys(current).reduce(
      (prev, key) => ({
        ...prev,
        ...{ [key]: update?.[key] || current[key] },
      }),
      {} as Record<K, string>
    );
  };

  return {
    merge,
  };
}
