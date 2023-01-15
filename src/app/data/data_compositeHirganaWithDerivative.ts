// interfaces
import { iCompositeKanaWithDerivativeCard } from '../writing/composite-kana-with-derivative-card/composite-kana-with-derivative-card.model';

// data
import { iKana } from '../writing/kana/kana.model';
import { HIRAGANA_K } from './data_hiraganaSyllables';

let hiraganaK: Array<iKana> = HIRAGANA_K;

const COMPOSITE_HIRAGANA_WITH_DERIVATIVE: Array<iCompositeKanaWithDerivativeCard> =
  [
    {
      isHiragana: true, // todo: refactoring of data-model to set 'isHiragana' only once
      rowOfKana: hiraganaK,
      solution: {
        kana: 'ギャ',
        pronunciation: 'gya',
      },
    },
  ];

export { COMPOSITE_HIRAGANA_WITH_DERIVATIVE };
