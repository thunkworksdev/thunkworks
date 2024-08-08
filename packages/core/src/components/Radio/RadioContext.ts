'use client';

import React from 'react';

export type RadioContextValue = {};

export const RadioContext = React.createContext<RadioContextValue | null>(null);

export const RadioProvider = RadioContext.Provider;

export const useRadioContext = () => React.useContext(RadioContext);
