import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export function useDidUpdate(cb: EffectCallback, dependencies?: DependencyList) {
  const mounted = useRef(false);

  useEffect(
    () => () => {
      mounted.current = false;
    },
    []
  );

  useEffect(() => {
    if (mounted.current) {
      return cb();
    }

    mounted.current = true;

    return undefined;
  }, dependencies);
}
