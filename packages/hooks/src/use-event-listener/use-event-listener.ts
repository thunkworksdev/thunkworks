import { useRef, useEffect } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect';

export function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  T extends HTMLElement | MediaQueryList | void = void,
>(
  eventName: KW | KH | KM,
  handler: (
    event: WindowEventMap[KW] | HTMLElementEventMap[KH] | MediaQueryListEventMap[KM] | Event
  ) => void,
  element?: React.RefObject<T>,
  options?: boolean | AddEventListenerOptions
) {
  const savedHandler = useRef(handler);

  useIsomorphicEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement: T | Window = element?.current ?? window;

    if (!(targetElement && targetElement.addEventListener)) return;

    const listener: typeof handler = (event) => savedHandler.current(event);

    targetElement.addEventListener(eventName, listener, options);

    return () => targetElement.removeEventListener(eventName, listener, options);
  }, [eventName, element, options]);
}
