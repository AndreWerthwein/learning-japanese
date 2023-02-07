import { Component, Input } from '@angular/core';
import { iFormsOfAdjectivesCard } from './forms-of-adjectives-card.model';

@Component({
  selector: 'forms-of-adjectives-card',
  templateUrl: './forms-of-adjectives-card.component.html',
  styleUrls: ['./forms-of-adjectives-card.component.scss'],
})
export class FormsOfAdjectivesCard {
  @Input() data: iFormsOfAdjectivesCard;

  // local variables
  showAnswerFor__NegativePresent: boolean = false;
  optionChosen__NegativePresent: boolean = false;
  showAnswerFor__PositivePast: boolean = false;
  optionChosen__PositivePast: boolean = false;
  showAnswerFor__NegativePast: boolean = false;
  optionChosen__NegativePast: boolean = false;
  success: number = 0;
  error: number = 0;

  onShowAnswerFor__NegativePresent(): void {
    this.showAnswerFor__NegativePresent = !this.showAnswerFor__NegativePresent;
  }

  onShowAnswerFor__PositivePast(): void {
    this.showAnswerFor__PositivePast = !this.showAnswerFor__PositivePast;
  }

  onShowAnswerFor__NegativePast(): void {
    this.showAnswerFor__NegativePast = !this.showAnswerFor__NegativePast;
  }

  onFailure(): void {
    if (this.success + this.error < 3) {
      this.error += 1;
    }
  } // increase counter for feedback-type 'error'

  onSuccess(): void {
    if (this.success + this.error < 3) {
      this.success += 1;
    }
  } // increase counter for feedback-type 'success'

  disableOptionsNegativePresent(): void {
    this.optionChosen__NegativePresent = true;
  } // disables feedback options after selection

  disableOptionsPositivePast(): void {
    this.optionChosen__PositivePast = true;
  } // disables feedback options after selection

  disableOptionsNegativePast(): void {
    this.optionChosen__NegativePast = true;
  } // disables feedback options after selection
}
