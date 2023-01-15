import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositeKanaWithDerivativeCard } from './composite-kana-with-derivative-card.component';

describe('CompositeKanaWithDerivativeCard', () => {
  let component: CompositeKanaWithDerivativeCard;
  let fixture: ComponentFixture<CompositeKanaWithDerivativeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompositeKanaWithDerivativeCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CompositeKanaWithDerivativeCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
