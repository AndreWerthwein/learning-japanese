import { Component } from '@angular/core';

// interfaces
import { iKana } from '../kana/kana.model';

// data
import { KATAKANA_VOWELS } from 'src/app/data/data_katakanaSyllables';

@Component({
  selector: 'overview-katakana',
  templateUrl: './overview-katakana.component.html',
  styleUrls: ['./overview-katakana.component.scss'],
})
export class OverviewKatakana {
  katakanaVowels: Array<iKana> = KATAKANA_VOWELS;
}
