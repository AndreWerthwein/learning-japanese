import { iVocabularyCard } from "../vocabulary/vocabulary-card/vocabulary-card.model";

const VOCABULARY : Array<iVocabularyCard> = [
    {
        translation: 'Samurai',
        japanese: {
            kanji: '侍',
            kanjiIsFirst: true,
            kana: 'さむらい'
        },
        pronunciation: {
            latin: 'sa-mu-ra-i',
            hiraganaOnly: 'さむらい'
        }
    },
    {
        translation: 'Straberry Cake',
        japanese: {
            kanjiIsFirst: false,
            kana: 'ストロベリー ケーキ'
        }, 
        pronunciation: {
            latin: 'su-to-ro-be-ri-i ke-ki', 
            hiraganaOnly: ''
        }
    }
]

export { VOCABULARY};