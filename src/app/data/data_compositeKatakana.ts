// interfaces
import { iCompositeKanaCardCard } from '../writing/composite-kana-card/composite-kana-card.model';
import { iKana } from '../writing/kana/kana.model';

// data
import { KATAKANA_K } from './data_katakanaSyllables';

let katakanaK: Array<iKana> = KATAKANA_K;

const COMPOSITE_KATAKANA: Array<iCompositeKanaCardCard> = [
  {
    isHiragana: false, // todo: refactoring of data-model to set 'isHiragana' only once
    rowOfKana: katakanaK,
    solution: {
      kana: 'キャ',
      pronunciation: 'kya',
    },
  },
];

export { COMPOSITE_KATAKANA };
