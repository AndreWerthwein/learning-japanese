export interface iVocabularyCard {
    translation: string;
    japanese: {
        isComposite?: boolean; // ?? if the japanese word consists of kanji and kana this porperty must be set
        kanjiIsFirst?: boolean; // ?? if it is a composite this property must be set to determine the proper order
        kanji?: string;
        kana?: string;
    };
    pronunciation: {
        hiraganaOnly: string;
        latin: string;
    };
}

// todo: 'iVocabularyCard' should allow for the following combinations: 'hirgana + kanji', 'kanji + hiragana', 'katana + kanji' and 'kanji + hiragana'. for 'kanji' the 'kanji-with-hiragana'-component sould be used