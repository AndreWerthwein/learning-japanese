import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyCard } from './vocabulary-card.component';

fdescribe('VocabularyCard', () => {
  let component: VocabularyCard;
  let fixture: ComponentFixture<VocabularyCard>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocabularyCard);
    component = fixture.componentInstance;
    component.data = {
      translation: 'Samurai',
      originatesInJapanese: true,
      japanese: { 
        kanji: '侍',
        hiragana: 'さむらい',
        pronounciation: 'sa-mu-ra-i'
      }
    };
    fixture.detectChanges();
  });

  it("should create 'VocabularyCard'", () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it("should call 'checkVocabularyCardData'", () => {
      spyOn<any>(component, "checkVocabularyCardData");

      component.ngOnInit();

      expect(component["checkVocabularyCardData"]).toHaveBeenCalledTimes(1);
    });
  });

  describe("checkVocabularyCardData", () => {
    it("should throw an error if word 'originatesInJapanese = true' and 'hiragana' and 'kanji' are NOT provided", () => {
      component.data = {
        translation: 'Samurai',
        originatesInJapanese: true,
        japanese: { 
          kanji: undefined,
          hiragana: undefined,
          pronounciation: 'sa-mu-ra-i'
        }
      };
      
      expect(() => {
        component["checkVocabularyCardData"]();
      }).toThrow(new Error("[DATA]: This word is configured with 'originatesInJapanese = true'. Please provide 'hiragana' and 'kanji' accordingly. Your provided for 'hiragana':" + component.data.japanese.hiragana + " and for 'kanji'" + component.data.japanese.kanji + ". Please review this data."));
    });

    it("should throw an error if word 'originatesInJapanese = false' and 'katakana' is NOT provided", () => {
      component.data = {
        translation: 'Samurai',
        originatesInJapanese: false,
        japanese: { 
          kanji: undefined,
          hiragana: undefined,
          katakana: undefined,
          pronounciation: 'sa-mu-ra-i'
        }
      };

      expect(() => {
        component["checkVocabularyCardData"]();
      }).toThrow(new Error("[DATA]: This word is configured with 'originatesInJapanese = false'. Please provide 'katakana' accordingly. Your provided for 'katakana':" + component.data.japanese.katakana + ". Please review this data."));
    });

    it("should throw an error if word 'originatesInJapanese = false' and 'hiragana' are provided", () => {
      component.data = {
        translation: 'Samurai',
        originatesInJapanese: false,
        japanese: { 
          kanji: undefined,
          hiragana: 'さむらい',
          katakana: 'ストロベリー ケーキ',
          pronounciation: 'sa-mu-ra-i'
        }
      };

      expect(() => {
        component["checkVocabularyCardData"]();
      }).toThrow(new Error("[DATA]: This word is configured with 'originatesInJapanese = false'. But writing is provided in traditional japanese writing. Please review this data or the configuration of this word."));
    });

    it("should throw an error if word 'originatesInJapanese = false' and 'kanji' are provided", () => {
      component.data = {
        translation: 'Samurai',
        originatesInJapanese: false,
        japanese: { 
          kanji: '侍',
          hiragana: undefined,
          katakana: 'ストロベリー ケーキ',
          pronounciation: 'sa-mu-ra-i'
        }
      };

      expect(() => {
        component["checkVocabularyCardData"]();
      }).toThrow(new Error("[DATA]: This word is configured with 'originatesInJapanese = false'. But writing is provided in traditional japanese writing. Please review this data or the configuration of this word."));
    });
  })
});
