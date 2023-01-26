import { Component, Input } from '@angular/core';
import { iKanjiWithHiragana } from './kanji-with-hiragana.model';

@Component({
  selector: 'kanji-with-hiragana',
  templateUrl: './kanji-with-hiragana.component.html',
  styleUrls: ['./kanji-with-hiragana.component.scss'],
})
export class KanjiWithHiragana {
  @Input() data: iKanjiWithHiragana;
}
