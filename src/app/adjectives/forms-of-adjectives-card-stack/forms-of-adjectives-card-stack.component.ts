import { Component } from '@angular/core';

// interfaces
import { iFormsOfAdjectivesCard } from '../forms-of-adjectives-card/forms-of-adjectives-card.model';

// data
import { NA_ADJECTIVES } from 'src/app/data/data_formsOfAdjectives';

@Component({
  selector: 'forms-of-adjectives-card-stack',
  templateUrl: './forms-of-adjectives-card-stack.component.html',
  styleUrls: ['./forms-of-adjectives-card-stack.component.scss'],
})
export class FormsOfAdjectivesCardStack {
  adjectives: Array<iFormsOfAdjectivesCard> = NA_ADJECTIVES;
}
