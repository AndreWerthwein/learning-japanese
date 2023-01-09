import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiWithHiragana } from './kanji-with-hiragana.component';

describe('KanjiWithHiragana', () => {
  let component: KanjiWithHiragana;
  let fixture: ComponentFixture<KanjiWithHiragana>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanjiWithHiragana ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanjiWithHiragana);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
