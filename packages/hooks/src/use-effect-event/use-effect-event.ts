import React from 'react';
import { useLayoutEffect } from '../use-layout-effect';

export function useEffectEvent<T extends Function>(fn?: T): T {
  const ref = React.useRef<T | null | undefined>(null);

  useLayoutEffect(() => {
    ref.current = fn;
  }, [fn]);

  // @ts-ignore
  return React.useCallback<T>((...args: any[]) => {
    return ref.current!?.(...args);
  }, []);
}
