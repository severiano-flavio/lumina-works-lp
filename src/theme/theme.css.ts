import {createGlobalTheme} from '@vanilla-extract/css';
import { vars } from './contract.css';
import { generateSpacingScale } from './utils';

const spacing = generateSpacingScale('spacing', 'px');

createGlobalTheme(':root', vars, {
  color: {
    primary: '#2596be',
    secondary: 'red',
    light: '#F1F1F1'
  },
  typography: {
    fontFamily: '\'Montserrat\', sans-serif',
    fontSize: {
      sm: '12px',
      md: '14px',
      lg: '20px',
    },
    fontWeight: {
      rg: 'regular',
      bd: 'bold',
    },
  },
  spacing,
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
});