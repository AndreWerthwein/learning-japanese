// interfaces
import { iCompositeKanaWithDerivativeCard } from '../writing/composite-kana-with-derivative-card/composite-kana-with-derivative-card.model';

// data
import { iKana } from '../writing/kana/kana.model';
import { KATAKANA_K } from './data_katakanaSyllables';

let katakanaK: Array<iKana> = KATAKANA_K;

const COMPOSITE_KATAKANA_WITH_DERIVATIVE: Array<iCompositeKanaWithDerivativeCard> =
  [
    {
      isHiragana: false, // todo: refactoring of data-model to set 'isHiragana' only once
      rowOfKana: katakanaK,
      solution: {
        kana: 'ギャ',
        pronunciation: 'gya',
      },
    },
  ];

export { COMPOSITE_KATAKANA_WITH_DERIVATIVE };
