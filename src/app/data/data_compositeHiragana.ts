// interfaces
import { iCompositeKanaCardCard } from '../writing/composite-kana-card/composite-kana-card.model';
import { iKana } from '../writing/kana/kana.model';

// data
import { HIRAGANA_K } from './data_hiraganaSyllables';

let hiraganaK: Array<iKana> = HIRAGANA_K;

const COMPOSITE_HIRAGANA: Array<iCompositeKanaCardCard> = [
  {
    isHiragana: false,
    rowOfKana: hiraganaK,
    solution: {
      kana: 'キャ',
      pronunciation: 'kya',
    },
  },
];

export { COMPOSITE_HIRAGANA };
