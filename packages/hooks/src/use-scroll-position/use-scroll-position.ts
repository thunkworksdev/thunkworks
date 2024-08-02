import { useState, useEffect } from 'react';

type ScrollPosition = Record<'x' | 'y', number>;

const INITIAL: ScrollPosition = { x: 0, y: 0 };

export function getScrollPosition(): ScrollPosition {
  return typeof window !== 'undefined' ? { x: window.scrollX, y: window.scrollY } : INITIAL;
}

export function useScrollPosition() {
  const [state, dispatch] = useState<ScrollPosition>(INITIAL);

  const events = ['scroll', 'resize'];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      events.forEach((event) => {
        window.addEventListener(event, () => dispatch(getScrollPosition()));
      });
    }
    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, () => dispatch(getScrollPosition()));
      });
    };
  }, []);

  useEffect(() => {
    dispatch(getScrollPosition());
  }, []);

  return [state, scrollTo];
}

export type UseScrollPositionReturn = ReturnType<typeof useScrollPosition>;
