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
      japanese: { 
        kanji: '侍',
        kana: 'さむらい',
      },
        pronunciation: {
          hiraganaOnly: 'さむらい',
          latin: 'sa-mu-ra-i'
      }
    };
    fixture.detectChanges();
  });

  it("should create 'VocabularyCard'", () => {
    expect(component).toBeTruthy();
  });
});
