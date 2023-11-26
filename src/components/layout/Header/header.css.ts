import { style } from '@vanilla-extract/css';
import { spacing } from '@theme';

export const headerRoot = style({
  display: 'flex',
  height: 80,
  boxShadow: '0px 2px 5px rgba(0,0,0,0.2)',
  alignItems: 'center',
  paddingLeft: spacing.spacing7,
  paddingRight: spacing.spacing7,
  justifyContent: 'space-between'
});

export const headerLogo = style({
  height: '50%',
  width: 'auto',
});
