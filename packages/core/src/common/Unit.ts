const Unit = {
  XXS: 4,
  XS: 8,
  SM: 12,
  MD: 16,
  LG: 24,
  XL: 32,
  XXL: 48,
  XXXL: 64,
} as const;

export type UnitType = (typeof Unit)[keyof typeof Unit];

export default Unit;
