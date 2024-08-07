'use client';

import React from 'react';

export const DEFAULT_SYSTEM_THEME_LIGHT: Record<string, string> = {
  'neutral-050': 'hsl(235, 1%, 05%)',
  'neutral-100': 'hsl(235, 1%, 10%)',
  'neutral-200': 'hsl(235, 1%, 20%)',
  'neutral-300': 'hsl(235, 1%, 30%)',
  'neutral-400': 'hsl(235, 1%, 40%)',
  'neutral-500': 'hsl(235, 1%, 50%)',
  'neutral-600': 'hsl(235, 1%, 60%)',
  'neutral-700': 'hsl(235, 1%, 70%)',
  'neutral-800': 'hsl(235, 1%, 80%)',
  'neutral-900': 'hsl(235, 1%, 90%)',
  'neutral-950': 'hsl(235, 1%, 95%)',
};

export const DEFAULT_SYSTEM_THEME_DARK: Record<string, string> = {
  'neutral-050': 'hsl(235, 1%, 95%)',
  'neutral-100': 'hsl(235, 1%, 90%)',
  'neutral-200': 'hsl(235, 1%, 80%)',
  'neutral-300': 'hsl(235, 1%, 70%)',
  'neutral-400': 'hsl(235, 1%, 60%)',
  'neutral-500': 'hsl(235, 1%, 50%)',
  'neutral-600': 'hsl(235, 1%, 40%)',
  'neutral-700': 'hsl(235, 1%, 30%)',
  'neutral-800': 'hsl(235, 1%, 20%)',
  'neutral-900': 'hsl(235, 1%, 10%)',
  'neutral-950': 'hsl(235, 1%, 05%)',
};

function prefix(token: string, prefix: string = 'thwx'): string {
  return `${prefix}-${token}`;
}

function getToken(token: string): string {
  return `--${prefix(token)}`;
}

export declare namespace THUNKWORKS {
  type Prefix = 'thwx';

  type ContextValue = {
    styleNonce: () => string;
  };

  type ThemeButtonOptions = {
    name: 'Button';
    selectors: {
      root: `${Prefix}-button-root`;
      label: `${Prefix}-button-label`;
      layout: `${Prefix}-button-layout`;
      content: `${Prefix}-button-content`;
    };
    variables: {
      'button-color': `--${Prefix}-button-color`;
      'button-border': `--${Prefix}-button-border`;
      'button-radius': `--${Prefix}-button-radius`;
      'button-height': `--${Prefix}-button-height`;
      'button-padding-x': `--${Prefix}-button-padding-x`;
      'button-font-size': `--${Prefix}-button-font-size`;
      'button-font-family': `--${Prefix}-button-font-family`;
      'button-font-weight': `--${Prefix}-button-font-weight`;
      'button-line-height': `--${Prefix}-button-line-height`;
      'button-bg-enabled': `--${Prefix}-button-bg-enabled`;
      'button-bg-hovered': `--${Prefix}-button-bg-hovered`;
      'button-bg-pressed': `--${Prefix}-button-bg-pressed`;
      'button-bg-selected': `--${Prefix}-button-bg-selected`;
      'button-bg-disabled': `--${Prefix}-button-bg-disabled`;
    };
  };

  type ThemeTextOptions = {
    name: 'Text';
    selectors: {
      root: `${Prefix}-text-root`;
    };
    variables: {
      'text-color': `--${Prefix}-text-color`;
      'text-border': `--${Prefix}-text-border`;
      'text-radius': `--${Prefix}-text-radius`;
      'text-height': `--${Prefix}-text-height`;
      'text-padding-x': `--${Prefix}-text-padding-x`;
      'text-font-size': `--${Prefix}-text-font-size`;
      'text-font-family': `--${Prefix}-text-font-family`;
      'text-font-weight': `--${Prefix}-text-font-weight`;
      'text-line-height': `--${Prefix}-text-line-height`;
    };
  };

  type ThemeComponentOptions = ThemeButtonOptions;

  type ThemeConfig = Record<string, string>;

  type ThemeConfigOptions = {
    rootTheme?: ThemeConfig;
    rootThemeDark?: ThemeConfig;
  };
}

type CreateThemeOptionsConfig = { name: string; variables: string[]; selectors: string[] };

function createThemeOptions(config: CreateThemeOptionsConfig) {
  const { name, selectors, variables } = config;
  return {
    name,
    variables: variables.map((i) => getToken(`${name.toLowerCase()}-${i}`)),
    selectors: selectors.map((i) => prefix(`${name.toLowerCase()}-${i}`)),
  };
}

const buttonOptions = createThemeOptions({
  name: 'Button',
  selectors: ['root', 'label', 'layout', 'content'],
  variables: [
    'color',
    'border',
    'radius',
    'height',
    'padding-x',
    'font-size',
    'font-family',
    'font-weight',
    'line-height',
    'bg-enabled',
    'bg-hovered',
    'bg-pressed',
    'bg-selected',
    'bg-disabled',
  ],
});

const themeButtonOptions = {
  name: 'Button',
  selectors: {
    root: prefix('button-root'),
    label: prefix('button-label'),
    layout: prefix('button-layout'),
    content: prefix('button-content'),
  },
  variables: {
    'button-color': getToken('button-color'),
    'button-border': getToken('button-border'),
    'button-radius': getToken('button-radius'),
    'button-height': getToken('button-height'),
    'button-padding-x': getToken('button-padding-x'),
    'button-font-size': getToken('button-font-size'),
    'button-font-family': getToken('button-font-family'),
    'button-font-weight': getToken('button-font-weight'),
    'button-line-height': getToken('button-line-height'),
    'button-bg-enabled': getToken('button-bg-enabled'),
    'button-bg-hovered': getToken('button-bg-hovered'),
    'button-bg-pressed': getToken('button-bg-pressed'),
    'button-bg-selected': getToken('button-bg-selected'),
    'button-bg-disabled': getToken('button-bg-disabled'),
  },
};

// const DEFAULT_COMPONENT_THEMES: {
//   Button: THUNKWORKS.ThemeButtonOptions;
//   Text: THUNKWORKS.ThemeTextOptions;
//   Title: THUNKWORKS.ThemeTextOptions;
//   Label: THUNKWORKS.ThemeTextOptions;
// } = {};

const ThunkworksContext = React.createContext<THUNKWORKS.ContextValue>({
  styleNonce: () => '',
});

const useThunkworks = () => React.useContext(ThunkworksContext);

export function ThunkworksProvider(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <ThunkworksContext.Provider value={{ styleNonce: () => '' }}>
      {children}
    </ThunkworksContext.Provider>
  );
}
