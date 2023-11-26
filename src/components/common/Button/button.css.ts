import { recipe } from '@vanilla-extract/recipes';
import { typography, color, spacing } from '@theme';
import {style} from "@vanilla-extract/css";
import { ButtonCompoundVariantGenerator } from './button.types';

// Utils
const generateCompoundVariant: ButtonCompoundVariantGenerator = (
  variant,
  colorVariant,
  color,
) => ({
  variants: {
    variant,
    color: colorVariant,
  },
  style: {
    backgroundColor: '#FFF',
    borderColor: color,
    color: color,
    selectors: {
      '&:hover': {
        backgroundColor: color,
        color: '#FFF',
      },
    },
  },
});

// Base styles
const baseButton = style({
  borderRadius: 10,
  fontWeight: typography.fontWeight.bd,
  fontFamily: typography.fontFamily,
  fontSize: '16px',
  border: 'none',
  color: color.light,
  paddingLeft: spacing.spacing2,
  paddingRight: spacing.spacing2,
  paddingTop: spacing.spacing1,
  paddingBottom: spacing.spacing1,
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      filter: 'brightness(1.05)'
    }
  }
});

// Button styles
export const buttonRoot = recipe({
  base: baseButton,
  variants: {
    variant: {
      solid: {
        border: 'none'
      },
      outlined: {
        border: '1px solid black'
      }
    },
    color: {
      primary: { backgroundColor: color.primary },
      secondary: { backgroundColor: color.secondary },
    },
    size: {
      small: { padding: 12 },
      medium: { padding: 16 },
      large: { padding: 24 }
    },
  },

  compoundVariants: [
    generateCompoundVariant(
      'outlined',
      'primary',
      color.primary,
    ),
    generateCompoundVariant(
      'outlined',
      'secondary',
      color.secondary,
    )
  ],

  defaultVariants: {
    color: 'primary',
    variant: 'outlined'
  }
});