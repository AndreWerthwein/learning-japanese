import { iVocabularyCard } from "src/app/vocabulary/vocabulary-card/vocabulary-card.model";

export interface iDictionaryTableRow {
    word: iVocabularyCard,
    description: Array<string>;
}