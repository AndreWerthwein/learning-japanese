import { Component } from '@angular/core';

// interfaces
import { iKana } from '../kana/kana.model';

// data
import {
  HIRAGANA_K,
  HIRAGANA_VOWELS,
  HIRAGANA_Y,
} from 'src/app/data/data_hiraganaSyllables';

@Component({
  selector: 'overview-hiragana',
  templateUrl: './overview-hiragana.component.html',
  styleUrls: ['./overview-hiragana.component.scss'],
})
export class OverviewHiragana {
  hiraganaVowels: Array<iKana> = HIRAGANA_VOWELS;
  hiraganaK: Array<iKana> = HIRAGANA_K;
  hiraganaY: Array<iKana> = HIRAGANA_Y;
}
