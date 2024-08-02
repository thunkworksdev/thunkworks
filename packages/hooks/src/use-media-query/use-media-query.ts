import { useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect';

type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

const IS_SERVER = typeof window === 'undefined';

export function useMediaQuery(query: string, options: UseMediaQueryOptions): boolean {
  const { defaultValue = false, initializeWithValue = true } = options;

  const handleMatches = (query: string): boolean => {
    return IS_SERVER ? defaultValue : window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return handleMatches(query);
    }
    return defaultValue;
  });

  function handleChange() {
    setMatches(handleMatches(query));
  }

  useIsomorphicEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    /**
     * Use deprecated `addListener` and `removeListener` to support Safari < 14
     */
    matchMedia.addEventListener('change', handleChange);
    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}
