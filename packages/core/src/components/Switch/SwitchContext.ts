'use client';

import React from 'react';

export type SwitchContextValue = {};

export const SwitchContext = React.createContext<SwitchContextValue | null>(null);

export const SwitchProvider = SwitchContext.Provider;

export const useSwitchContext = () => React.useContext(SwitchContext);
