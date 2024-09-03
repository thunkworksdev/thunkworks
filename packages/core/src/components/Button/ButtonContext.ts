import Thunkworks from '@thunkworks/types';
import { createContext, useContext } from 'react';

export const ButtonContext = createContext<Thunkworks.ButtonContext>(null);

export const ButtonProvider = ButtonContext.Provider;

export const useButtonContext = () => useContext(ButtonContext);

ButtonContext.displayName = '@thunkworks/core/ButtonContext';
