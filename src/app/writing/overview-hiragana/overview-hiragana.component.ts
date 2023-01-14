import { Component } from '@angular/core';

// interfaces
import { iKana } from '../kana/kana.model';

// data
import { HIRAGANA_VOWELS } from 'src/app/data/data_hiraganaSyllables';

@Component({
  selector: 'overview-hiragana',
  templateUrl: './overview-hiragana.component.html',
  styleUrls: ['./overview-hiragana.component.scss'],
})
export class OverviewHiragana {
  hiraganaVowels: Array<iKana> = HIRAGANA_VOWELS;
}
