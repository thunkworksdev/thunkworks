'use client';

import React from 'react';
import { Button, camelToKebabCase, keys, Text, Title } from '@thunkworks/core';

function parsePropertiesCSS(css: React.CSSProperties) {
  return keys(css).reduce((acc, rule) => {
    if (css[rule] !== undefined) {
      return `${acc}${camelToKebabCase(rule)}:${css[rule]};`;
    }
    return acc;
  }, '');
}

export function SampleCard() {
  return (
    <section>
      <Title>Card Title</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error corporis voluptate
        voluptatibus necessitatibus facere neque qui omnis itaque maiores! Ab amet, ipsum hic
        ducimus omnis eligendi provident saepe possimus sint?
      </Text>
      <Button>Button Label</Button>
    </section>
  );
}

export function StyleDemo() {
  return (
    <section>
      <SampleCard />
    </section>
  );
}
