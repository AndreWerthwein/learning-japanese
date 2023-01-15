import { iKana } from '../kana/kana.model';

export interface iCompositeKanaWithDerivativeCard {
  isHiragana: boolean;
  rowOfKana: Array<iKana>;
  solution: iKana;
}
