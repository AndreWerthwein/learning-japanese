import { Component, Input, OnInit } from '@angular/core';
import { iVocabularyCard } from './vocabulary-card.model';

@Component({
  selector: 'vocabulary-card',
  templateUrl: './vocabulary-card.component.html',
  styleUrls: ['./vocabulary-card.component.scss']
})

export class VocabularyCard implements OnInit {
  @Input() data: iVocabularyCard;

  // local variables
  vocabularyCardFlipped: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // if (this.data) this.checkVocabularyCardData();
  }

  onShowAnswer(): void {
    this.vocabularyCardFlipped = !this.vocabularyCardFlipped;
  } // shows answer by flipping the vocabulary-card
}
