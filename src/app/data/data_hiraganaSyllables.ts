import { iKana } from '../writing/kana/kana.model';

const HIRAGANA_VOWELS: Array<iKana> = [
  {
    kana: 'あ',
    pronunciation: 'a',
  },
  {
    kana: 'い',
    pronunciation: 'i',
  },
  {
    kana: 'う',
    pronunciation: 'u',
  },
  {
    kana: 'え',
    pronunciation: 'e',
  },
  {
    kana: 'お',
    pronunciation: 'o',
  },
];

const HIRAGANA_K: Array<iKana> = [
  {
    kana: 'か',
    pronunciation: 'ka',
  },
  {
    kana: 'き',
    pronunciation: 'ki',
  },
  {
    kana: 'く',
    pronunciation: 'ku',
  },
  {
    kana: 'け',
    pronunciation: 'ke',
  },
  {
    kana: 'こ',
    pronunciation: 'ko',
  },
];

const HIRAGANA_Y: Array<iKana> = [
  {
    kana: 'や',
    pronunciation: 'ya',
  },
  {
    kana: 'ゆ',
    pronunciation: 'yu',
  },
  {
    kana: 'よ',
    pronunciation: 'yo',
  },
];

export { HIRAGANA_VOWELS, HIRAGANA_K, HIRAGANA_Y };
