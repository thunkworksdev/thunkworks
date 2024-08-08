'use client';

import React from 'react';

export type CheckboxContextValue = {};

export const CheckboxContext = React.createContext<CheckboxContextValue | null>(null);

export const CheckboxProvider = CheckboxContext.Provider;

export const useCheckboxContext = () => React.useContext(CheckboxContext);
