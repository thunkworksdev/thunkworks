import { useState, useRef, useMemo, useEffect } from 'react';

type Axis = 'x' | 'y';

type Side = 'top' | 'left' | 'right' | 'bottom';

type Length = 'width' | 'height';

type Coords = { [Key in Axis]: number };

type Placements = { [Key in Side]: number };

type Dimensions = { [Key in Length]: number };

type ObserverRect = Coords & Placements & Dimensions;

const INITIAL_RECT: ObserverRect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
};

export function useResizeObserver<T extends HTMLElement = any>(options: ResizeObserverOptions) {
  const [rect, setRect] = useState(INITIAL_RECT);
  const frame = useRef(0);
  const ref = useRef<T>();

  const observer = useMemo(() => {
    return new ResizeObserver((entries: any) => {
      const entry = entries[0];
      if (entry) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(() => {
          if (ref.current) {
            setRect(entry.contentRect);
          }
        });
      }
    });
  }, []);

  useEffect(() => {
    if (ref.current) {
      observer?.observe(ref.current, options);
    }
    return () => {
      observer?.disconnect();
      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, [ref.current]);

  return [ref, rect];
}

export type UseResizeObserverReturnType<T extends HTMLElement = any> = ReturnType<
  typeof useResizeObserver<T>
>;
