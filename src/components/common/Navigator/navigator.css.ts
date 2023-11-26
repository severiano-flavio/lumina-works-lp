import { style } from '@vanilla-extract/css';
import { spacing, typography, color } from '@theme';

export const navWrapper = style({
  display: 'flex',
  columnGap: spacing.spacing3

})
export const navList = style({
  display: 'flex',
  listStyleType: 'none',
  columnGap: spacing.spacing3,
  alignItems: 'center',
})
export const navLink = style({
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: typography.fontWeight.bd,

  selectors: {
    '&:hover': {
      color: color.primary
    }
  }
})

export const navIcons = style({
  display: 'flex',
  columnGap: spacing.spacing2
})

export const navIcon = style({
  display: 'flex',
  columnGap: spacing.spacing2
})