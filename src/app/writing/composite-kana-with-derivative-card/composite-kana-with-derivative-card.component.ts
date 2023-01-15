import { Component, EventEmitter, Input, Output } from '@angular/core';

// interfaces
import { iCompositeKanaWithDerivativeCard } from './composite-kana-with-derivative-card.model';
import { iKana } from '../kana/kana.model';

// data
import { KANA_DAKUTEN } from 'src/app/data/data_kanaDakuten';
import { HIRAGANA_Y } from 'src/app/data/data_hiraganaSyllables';
import { KATAKANA_Y } from 'src/app/data/data_katakanaSyllables';

@Component({
  selector: 'composite-kana-with-derivative-card',
  templateUrl: './composite-kana-with-derivative-card.component.html',
  styleUrls: ['./composite-kana-with-derivative-card.component.scss'],
})
export class CompositeKanaWithDerivativeCard {
  @Input() data: iCompositeKanaWithDerivativeCard;
  @Output() userStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  // local variables
  kanaDakuten: Array<iKana> = KANA_DAKUTEN;
  hiraganaY: Array<iKana> = HIRAGANA_Y;
  katakanaY: Array<iKana> = KATAKANA_Y;

  answerGiven: boolean = false;
  userSuccess: boolean;
}
