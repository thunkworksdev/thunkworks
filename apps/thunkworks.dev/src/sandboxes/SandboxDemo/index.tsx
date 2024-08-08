'use client';

import React from 'react';

const SandboxDemoStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};

export function SandboxDemo() {
  return (
    <div style={SandboxDemoStyles}>
      <h1>Sandbox Demo</h1>
    </div>
  );
}
