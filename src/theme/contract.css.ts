import {createGlobalThemeContract} from "@vanilla-extract/css";
import { generateSpacingScale } from './utils';

const generateSpacing = generateSpacingScale('spacing');

export const vars = createGlobalThemeContract({
  color: {
    primary: 'color-primary',
    secondary: 'color-secondary',
    light: 'color-light',
  },
  typography: {
    fontFamily: 'font-family',
    fontSize: {
      sm: 'font-size-small',
      md: 'font-size-medium',
      lg: 'font-size-large',
    },
    fontWeight: {
      rg: 'font-weight-regular',
      bd: 'font-weight-bold',
    },
  },
  spacing: generateSpacing,
  breakpoints: {
    mobile: 'breakpoint-mobile',
    tablet: 'breakpoint-tablet',
    desktop: 'breakpoint-desktop',
  },
});


export const { spacing, breakpoints, typography, color } = vars
