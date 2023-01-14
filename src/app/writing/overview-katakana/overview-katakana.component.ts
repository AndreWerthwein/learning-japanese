import { Component } from '@angular/core';

// interfaces
import { iKana } from '../kana/kana.model';

// data
import {
  KATAKANA_K,
  KATAKANA_VOWELS,
  KATAKANA_Y,
} from 'src/app/data/data_katakanaSyllables';

@Component({
  selector: 'overview-katakana',
  templateUrl: './overview-katakana.component.html',
  styleUrls: ['./overview-katakana.component.scss'],
})
export class OverviewKatakana {
  katakanaVowels: Array<iKana> = KATAKANA_VOWELS;
  katakanaK: Array<iKana> = KATAKANA_K;
  katakanaY: Array<iKana> = KATAKANA_Y;
}
