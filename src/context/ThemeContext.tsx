import { createContext } from 'react';
import { Colors } from '@themes/index';

export const themes = {
  colorTheme: {
    textColor: Colors.icBlue,
    activeDotColor: Colors.icGreen,
    inActiveDotColor: Colors.icGreen500,
  },
};

export const ThemeContext = createContext(themes);
