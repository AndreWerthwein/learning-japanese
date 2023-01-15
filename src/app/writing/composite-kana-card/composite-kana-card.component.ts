import { Component, EventEmitter, Input, Output } from '@angular/core';

// interfaces
import { iCompositeKanaCardCard } from './composite-kana-card.model';
import { iKana } from '../kana/kana.model';

// data
import { HIRAGANA_Y } from 'src/app/data/data_hiraganaSyllables';
import { KATAKANA_Y } from 'src/app/data/data_katakanaSyllables';

@Component({
  selector: 'composite-kana-card',
  templateUrl: './composite-kana-card.component.html',
  styleUrls: ['./composite-kana-card.component.scss'],
})
export class CompositeKanaCard {
  @Input() data: iCompositeKanaCardCard;
  @Output() userStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  // local variables
  hiraganaY: Array<iKana> = HIRAGANA_Y;
  katakanaY: Array<iKana> = KATAKANA_Y;
  answerGiven: boolean = false;
  userSuccess: boolean;
  kanaValue: iKana;
  yValue: iKana;

  setKanaValue(event: iKana): void {
    this.kanaValue = event;

    this.onCheckUserAnswer(this.kanaValue, this.yValue);
  } // sets value of 'kana' (first dropdown) and triggers the checking of the users answer

  setYValue(event: iKana): void {
    this.yValue = event;

    this.onCheckUserAnswer(this.kanaValue, this.yValue);
  } // sets value of 'ya', 'yu' and 'yo' (first dropdown) and triggers the checking of the users answer

  onCheckUserAnswer(kanaValue: iKana, yValue: iKana): void {
    if (kanaValue && yValue) this.answerGiven = true;

    if (
      kanaValue.pronunciation === 'ka' ||
      kanaValue.pronunciation === 'ku' ||
      kanaValue.pronunciation === 'ke' ||
      kanaValue.pronunciation === 'ko'
    ) {
      // ?? combinations with 'ya','yu' and 'yo' are only possible with '...i' syllables
      this.userSuccess = false;
      this.userStatus.emit(false);
    } else {
      let relevantPartOfSolution: string =
        this.data.solution.pronunciation.substring(
          this.data.solution.pronunciation.length - 1,
          this.data.solution.pronunciation.length
        );
      if (
        (relevantPartOfSolution === 'a' &&
          this.yValue.pronunciation === 'ya') ||
        (relevantPartOfSolution === 'u' &&
          this.yValue.pronunciation === 'yu') ||
        (relevantPartOfSolution === 'o' && this.yValue.pronunciation === 'yo')
      ) {
        this.userSuccess = true;
        this.userStatus.emit(true);
      } else {
        this.userSuccess = false;
        this.userStatus.emit(false);
      }
    }
  } // checks the users answer and shows feedback accordingly
}
