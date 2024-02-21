import { ValuesOf } from '../../types';
import * as Color from './Color';

export const Background = {
  White: Color.White,
} as const;

export type Background = ValuesOf<typeof Background>;
