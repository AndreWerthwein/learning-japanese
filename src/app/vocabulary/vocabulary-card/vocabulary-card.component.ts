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
    if (this.data) this.checkVocabularyCardData();
  }

  private checkVocabularyCardData() : void {
    // ?? the word orignates in japanese but traditional japanese writing is not provided
    if (this.data.originatesInJapanese && (!this.data.japanese.hiragana || !this.data.japanese.kanji)) {
      throw new Error("[DATA]: This word is configured with 'originatesInJapanese = true'. Please provide 'hiragana' and 'kanji' accordingly. Your provided for 'hiragana':" + this.data.japanese.hiragana + " and for 'kanji'" + this.data.japanese.kanji + ". Please review this data.");
    }
    
    // ?? the word does not orignate in japanese but japanese writing for foreign words is not provided
    if (!this.data.originatesInJapanese && !this.data.japanese.katakana) {
      throw new Error("[DATA]: This word is configured with 'originatesInJapanese = false'. Please provide 'katakana' accordingly. Your provided for 'katakana':" + this.data.japanese.katakana + ". Please review this data.");
    }
    
    // ?? the word does not orignate in japanese but traditional japanese writing is not provided
    if (!this.data.originatesInJapanese && (this.data.japanese.hiragana || this.data.japanese.kanji)) {
      throw new Error("[DATA]: This word is configured with 'originatesInJapanese = false'. But writing is provided in traditional japanese writing. Please review this data or the configuration of this word.");
    }
  } // checks the data model of the vocabulary-card
}
