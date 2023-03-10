import { Component } from '@angular/core';
import { iFormsOfAdjectivesCard } from './adjectives/forms-of-adjectives-card/forms-of-adjectives-card.model';

// interfaces
import { iVocabularyCard } from './vocabulary/vocabulary-card/vocabulary-card.model';
import { iDictionaryTableRow } from './dictionary/dictionary-table/dictionary-table-row.model';

// example data
import { VOCABULARY } from './data/data_vocabulary';
import { NA_ADJECTIVES } from './data/data_formsOfAdjectives';
import { iKana } from './writing/kana/kana.model';
import { KATAKANA_K } from './data/data_katakanaSyllables';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learning-japanese';
  katakanaK: Array<iKana> = KATAKANA_K;
  vocabulary: Array<iVocabularyCard> = VOCABULARY;
  adjectives: Array<iFormsOfAdjectivesCard> = NA_ADJECTIVES;
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
          hiraganaOnly: 'さむらい',
        },
      },
      description: [
        "What, right here right now in the cafeteria? What if she said no? I don't know if I could take that kind of rejection. Besides, I think she'd rather go with somebody else. Did you hurt your head? I just wanna use the phone. I don't wanna see you in here again. Like I always told you, if you put your mind to it you could accomplish anything.",
      ],
    },
    {
      word: {
        translation: 'Straberry Cake',
        japanese: {
          kanjiIsFirst: false,
          kana: 'ストロベリー ケーキ',
        },
        pronunciation: {
          latin: 'su-to-ro-be-ri-i ke-ki',
          hiraganaOnly: '',
        },
      },
      description: [''],
    },
  ];
}
