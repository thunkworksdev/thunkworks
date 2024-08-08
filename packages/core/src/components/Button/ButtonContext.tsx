'use client';

import React from 'react';

export type ButtonContextValue = {};

export const ButtonContext = React.createContext<ButtonContextValue | null>(null);

export const ButtonProvider = ButtonContext.Provider;

export const useButtonContext = () => React.useContext(ButtonContext);
