import { Button } from '@thunkworks/core';
import React from 'react';

export default function Home() {
  return (
    <main>
      <section>
        <h1>Thunkworks</h1>
        <Button classNames={{ label: 'some-custom-classNames' }}>Button</Button>
      </section>
    </main>
  );
}
