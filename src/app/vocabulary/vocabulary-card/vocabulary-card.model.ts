export interface iVocabularyCard {
    translation: string;
    originatesInJapanese: boolean;
    japanese: {
        kanji?: string;
        hiragana?: string;
        katakana?: string;
        pronounciation: string;
    }
}