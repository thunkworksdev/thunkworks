/* eslint-disable no-console */
import { useEffect } from 'react';
import { useDidUpdate } from '../use-did-update';

export function useLogger(name: string, props: any[]) {
  useEffect(() => {
    console.log(`${name} mounted`, ...props);
    return () => console.log(`${name} unmounted`);
  }, []);

  useDidUpdate(() => {
    console.log(`${name} updated`, ...props);
  }, props);

  return null;
}
