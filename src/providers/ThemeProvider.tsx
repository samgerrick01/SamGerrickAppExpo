import React from 'react';
import { ThemeContext, themes } from '@context/ThemeContext';

export const ThemeProvider = ({ children }: any) => {
  return <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>;
};
