import { iKana } from '../writing/kana/kana.model';

const KATAKANA_VOWELS: Array<iKana> = [
  {
    kana: 'ア',
    pronunciation: 'a',
  },
  {
    kana: 'イ',
    pronunciation: 'i',
  },
  {
    kana: 'ウ',
    pronunciation: 'u',
  },
  {
    kana: 'エ',
    pronunciation: 'e',
  },
  {
    kana: 'オ',
    pronunciation: 'o',
  },
];

const KATAKANA_K: Array<iKana> = [
  {
    kana: 'カ',
    pronunciation: 'ka',
  },
  {
    kana: 'キ',
    pronunciation: 'ki',
  },
  {
    kana: 'ク',
    pronunciation: 'ku',
  },
  {
    kana: 'ケ',
    pronunciation: 'ke',
  },
  {
    kana: 'コ',
    pronunciation: 'ko',
  },
];

const KATAKANA_Y: Array<iKana> = [
  {
    kana: 'ヤ',
    pronunciation: 'ya',
  },
  {
    kana: 'ユ',
    pronunciation: 'yu',
  },
  {
    kana: 'ヨ',
    pronunciation: 'yo',
  },
];

export { KATAKANA_VOWELS, KATAKANA_K, KATAKANA_Y };
