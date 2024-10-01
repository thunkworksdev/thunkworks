import { useState } from 'react';

export function useClipboard({ timeout = 2000 } = {}) {
  const [error, setError] = useState<Error | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyTimeout, setCopyTimeout] = useState<number | null>(null);

  const cleanup = (value: boolean) => {
    window.clearTimeout(copyTimeout!);
    setCopyTimeout(window.setTimeout(() => setCopied(false), timeout));
    setCopied(value);
  };

  const copy = async (valueToCopy: any) => {
    try {
      if ('clipboard' in navigator) {
        await navigator.clipboard.writeText(valueToCopy);
        cleanup(true);
      }
    } catch (err: any) {
      setError(err);
    }
  };

  const reset = () => {
    setError(null);
    setCopied(false);
    window.clearTimeout(copyTimeout!);
  };

  return { copy, reset, error, copied };
}
