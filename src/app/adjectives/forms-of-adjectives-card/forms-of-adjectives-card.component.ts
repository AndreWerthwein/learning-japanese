import { Component, Input } from '@angular/core';
import { iFormsOfAdjectivesCard } from './forms-of-adjectives-card.model';

@Component({
  selector: 'forms-of-adjectives-card',
  templateUrl: './forms-of-adjectives-card.component.html',
  styleUrls: ['./forms-of-adjectives-card.component.scss']
})
export class FormsOfAdjectivesCard {
  @Input() data: iFormsOfAdjectivesCard;

  // local variables
  showAnswerFor__NegativePresent: boolean = false;
  showAnswerFor__PositivePast: boolean = false;
  showAnswerFor__NegativePast: boolean = false;  

  onShowAnswerFor__NegativePresent(): void {
    this.showAnswerFor__NegativePresent = !this.showAnswerFor__NegativePresent;
  }

  onShowAnswerFor__PositivePast(): void {
    this.showAnswerFor__PositivePast = !this.showAnswerFor__PositivePast;
  }

  onShowAnswerFor__NegativePast(): void {
    this.showAnswerFor__NegativePast = !this.showAnswerFor__NegativePast;
  }

  onFailure():void {}
  
  onSuccess():void {}
}
