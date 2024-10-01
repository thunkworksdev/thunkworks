import { useCallback, useState } from 'react';

export type UseDisclosureOptions = Partial<{
  onClose: () => void;
  onOpen: () => void;
}>;

export function useDisclosure(initialState: boolean, options: UseDisclosureOptions = {}) {
  const [state, dispatch] = useState(initialState);

  const open = useCallback(
    () =>
      dispatch((isOpen) => {
        if (!isOpen) {
          options.onOpen?.();
          return true;
        }
        return isOpen;
      }),
    [options.onOpen]
  );

  const close = useCallback(
    () =>
      dispatch((isOpen) => {
        if (isOpen) {
          options.onClose?.();
          return false;
        }
        return isOpen;
      }),
    [options.onClose]
  );

  const toggle = useCallback(() => (state ? close() : open()), [state, close, open]);

  return [state, { open, close, toggle }] as const;
}

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>;
