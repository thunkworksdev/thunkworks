import React from 'react';

export const useLayoutEffect:
  | ((effect: React.EffectCallback, deps?: React.DependencyList) => void)
  | (() => void) = typeof document !== 'undefined' ? React.useLayoutEffect : () => {};
