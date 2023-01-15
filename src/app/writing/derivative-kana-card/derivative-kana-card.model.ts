import { iKana } from '../kana/kana.model';

export interface iDerivativeKanaCard {
  rowOfKana: Array<iKana>;
  solution: iKana;
}
