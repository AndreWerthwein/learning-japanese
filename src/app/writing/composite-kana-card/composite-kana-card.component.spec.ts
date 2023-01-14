import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositeKanaCard } from './composite-kana-card.component';

describe('CompositeKanaCard', () => {
  let component: CompositeKanaCard;
  let fixture: ComponentFixture<CompositeKanaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompositeKanaCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CompositeKanaCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
