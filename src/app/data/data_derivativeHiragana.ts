// interfaces
import { iDerivativeKanaCard } from '../writing/derivative-kana-card/derivative-kana-card.model';
import { iKana } from '../writing/kana/kana.model';

// data
import { HIRAGANA_K } from './data_hiraganaSyllables';

let hiraganaK: Array<iKana> = HIRAGANA_K;

const DERIVATIVE_HIRAGANA: Array<iDerivativeKanaCard> = [
  {
    rowOfKana: hiraganaK,
    solution: {
      kana: 'ぎ',
      pronunciation: 'gi',
    },
  },
];

export { DERIVATIVE_HIRAGANA };
