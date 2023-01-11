import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyCardStack } from './vocabulary-card-stack.component';

describe('VocabularyCardStack', () => {
  let component: VocabularyCardStack;
  let fixture: ComponentFixture<VocabularyCardStack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VocabularyCardStack],
    }).compileComponents();

    fixture = TestBed.createComponent(VocabularyCardStack);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
