import { Component } from '@angular/core';

// interfaces
import { iVocabularyCard } from '../vocabulary-card/vocabulary-card.model';

// data
import { VOCABULARY } from 'src/app/data/data_vocabulary';

@Component({
  selector: 'vocabulary-card-stack',
  templateUrl: './vocabulary-card-stack.component.html',
  styleUrls: ['./vocabulary-card-stack.component.scss'],
})
export class VocabularyCardStack {
  vocabulary: Array<iVocabularyCard> = VOCABULARY;
}
