import { ValuesOf } from '../../types';
import * as Color from './Color';

export const Background = {
  Primary: Color.Grey.G500,
  Secondary: Color.Grey.G600,
} as const;

export type Background = ValuesOf<typeof Background>;
