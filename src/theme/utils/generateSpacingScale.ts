export const generateSpacingScale = (property: string, unit = '') => {
  const spacingScale: Record<string, string> = {};

  const prefix = unit ? '' : property + '-'

  for (let i = 1; i <= 10; i++) {
    spacingScale[`${property}${i}`] = `${prefix}${6 * i}${unit}`;
  }

  return spacingScale;
};