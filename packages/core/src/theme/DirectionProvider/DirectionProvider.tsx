import { createContext, useCallback, useContext, useState } from 'react';
import { useIsomorphicEffect } from '@thunkworks/hooks';

export type Direction = 'ltr' | 'rtl';

export interface DirectionContextValue {
  direction: Direction;
  setDirection: (dir: Direction) => void;
  toggleDirection: () => void;
}

export interface DirectionProviderProps {
  children: React.ReactNode;
  detectDirection?: boolean;
  initialDirection?: Direction;
}

const INITIAL_CONTEXT_VALUE: DirectionContextValue = {
  direction: 'ltr',
  setDirection: () => {},
  toggleDirection: () => {},
};

export const DirectionContext = createContext<DirectionContextValue>(INITIAL_CONTEXT_VALUE);

export const useDirection = () => useContext(DirectionContext);

export function DirectionProvider(props: DirectionProviderProps) {
  const { children, detectDirection = true, initialDirection = 'ltr' } = props;

  const [_direction, _setDirection] = useState<Direction>(initialDirection);

  const setDirection = (dir: Direction) => {
    _setDirection(dir);
    document.documentElement.setAttribute('dir', dir);
  };

  const toggleDirection = useCallback(() => {
    setDirection(_direction === 'ltr' ? 'rtl' : 'ltr');
  }, [_direction, setDirection]);

  useIsomorphicEffect(() => {
    if (detectDirection) {
      const direction = document.documentElement.getAttribute('dir');
      if (direction === 'rtl' || direction === 'ltr') {
        setDirection(direction);
      }
    }
  }, []);

  return (
    <DirectionContext.Provider value={{ direction: _direction, toggleDirection, setDirection }}>
      {children}
    </DirectionContext.Provider>
  );
}
