export type ButtonTypes = {
  label: string,
  color?: 'primary' | 'secondary',
  size?: 'small' | 'medium' | 'large'
}


export type ButtonVariant = 'solid' | 'outlined';
export type ButtonColorVariant = 'primary' | 'secondary';

export type CompoundVariant = {
  variant: ButtonVariant;
  color: ButtonColorVariant;
};

export type ButtonCompoundVariantGenerator = (
  variant: ButtonVariant,
  colorVariant: ButtonColorVariant,
  color: string,
) => {
  variants: CompoundVariant;
  style: Record<string, string | object>;
};
