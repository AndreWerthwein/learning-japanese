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
      word: {
        translation: 'Samurai',
        japanese: {
          isComposite: true,
          kanjiIsFirst: true,
          kanji: '侍',
        },
        pronunciation: {
          latin: 'sa-mu-ra-i',
          hiraganaOnly: 'さむらい'
        }
    },
      description: ["What, right here right now in the cafeteria? What if she said no? I don't know if I could take that kind of rejection. Besides, I think she'd rather go with somebody else. Did you hurt your head? I just wanna use the phone. I don't wanna see you in here again. Like I always told you, if you put your mind to it you could accomplish anything."]
    }, {
      word: {
        translation: 'Straberry Cake',
        japanese: {
            kanjiIsFirst: false,
            kana: 'ストロベリー ケーキ'
        }, 
        pronunciation: {
            latin: 'su-to-ro-be-ri-i ke-ki', 
            hiraganaOnly: ''
        }
    },
      description: [""]
    }
  ];

  adjectives = {
      typeOfAdjective: 'な-Adjective',
      adjective: {
          kana: 'げんき（な)',
          pronunciation: 'genki-na',
          translation: 'being healthy'
        },
        negativePresent: {
          kana: 'げんきじゃない',
          pronunciation: 'ge-n-ki-ja-na-i',
          translation: 'not being healthy'
        },
        positivePast: {
          kana: 'げんきだった',
          pronunciation: 'ge-n-ki-da-t-t-a',
          translation: 'was healthy'
        },
        negativePast: {
          kana: 'げんきじゃなかった',
          pronunciation: 'ge-n-ki-ja-na-ka-t-t-a',
          translation: 'was not healthy'
      },
  }
}
