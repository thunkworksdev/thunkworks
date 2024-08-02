'use client';

import { Button } from '@thunkworks/core';
import { useCounter } from '@thunkworks/hooks';

export function Counter() {
  const [count, { reset, increment, decrement }] = useCounter();

  return (
    <section>
      <div>{count}</div>
      <div>
        <Button onClick={reset}>RESET</Button>
        <Button onClick={decrement}>DECREMENT</Button>
        <Button onClick={increment}>INCREMENT</Button>
      </div>
    </section>
  );
}
