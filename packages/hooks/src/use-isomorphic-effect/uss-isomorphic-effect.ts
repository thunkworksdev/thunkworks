import { useEffect, useLayoutEffect } from 'react';

const IS_BROWSER = typeof window !== 'undefined';

export const useIsomorphicEffect = IS_BROWSER ? useLayoutEffect : useEffect;
