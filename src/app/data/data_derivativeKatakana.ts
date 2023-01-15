// interfaces
import { iDerivativeKanaCard } from '../writing/derivative-kana-card/derivative-kana-card.model';
import { iKana } from '../writing/kana/kana.model';

// data
import { KATAKANA_K } from './data_katakanaSyllables';

let katakanaK: Array<iKana> = KATAKANA_K;

const DERIVATIVE_KATAKANA: Array<iDerivativeKanaCard> = [
  {
    rowOfKana: katakanaK,
    solution: {
      kana: 'ギ',
      pronunciation: 'gi',
    },
  },
];

export { DERIVATIVE_KATAKANA };
