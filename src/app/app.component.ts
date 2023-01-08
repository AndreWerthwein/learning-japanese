import { Component } from '@angular/core';

// example data
import { VOCABULARY } from './data/data_vocabulary';
import { iDictionaryTableRow } from './dictionary/dictionary-table/dictionary-table-row.model';
import { iVocabularyCard } from './vocabulary/vocabulary-card/vocabulary-card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-japanese';
  vocabulary: Array<iVocabularyCard> = VOCABULARY;
  dictionary: Array<iDictionaryTableRow> = [
    {
      word: {translation: 'Samurai', originatesInJapanese: true, japanese: { kanji: '侍', hiragana: 'さむらい', pronounciation: 'sa-mu-ra-i'}},
      description: ["What, right here right now in the cafeteria? What if she said no? I don't know if I could take that kind of rejection. Besides, I think she'd rather go with somebody else. Did you hurt your head? I just wanna use the phone. I don't wanna see you in here again. Like I always told you, if you put your mind to it you could accomplish anything."]
    }, {
      word: {translation: 'Straberry Cake', originatesInJapanese: false, japanese: {katakana: 'ストロベリー ケーキ', pronounciation: 'su-to-ro-be-ri-i ke-ki'}},
      description: [""]
    }
  ]
}
