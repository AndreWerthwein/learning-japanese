import { Component, Input, OnInit } from '@angular/core';
import { iVocabularyCard } from './vocabulary-card.model';

@Component({
  selector: 'vocabulary-card',
  templateUrl: './vocabulary-card.component.html',
  styleUrls: ['./vocabulary-card.component.scss']
})

export class VocabularyCard implements OnInit {
  @Input() data: iVocabularyCard;

  constructor() {}

  ngOnInit(): void {
    // if (this.data) this.checkVocabularyCardData();
  }
}
