import { iFormsOfAdjectivesCard } from "../adjectives/forms-of-adjectives-card/forms-of-adjectives-card.model";

const I_ADJECTIVES: Array<iFormsOfAdjectivesCard> = [];

const NA_ADJECTIVES: Array<iFormsOfAdjectivesCard> = [
    {
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
];

const NO_ADJECTIVES: Array<iFormsOfAdjectivesCard> = [];

export { NA_ADJECTIVES };