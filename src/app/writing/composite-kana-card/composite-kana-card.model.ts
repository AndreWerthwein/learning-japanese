import { iKana } from '../kana/kana.model';

export interface iCompositeKanaCardCard {
  isHiragana: boolean;
  rowOfKana: Array<iKana>;
  solution: iKana;
}
