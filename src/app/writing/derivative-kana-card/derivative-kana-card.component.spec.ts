import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivativeKanaCard } from './derivative-kana-card.component';

describe('DerivativeKanaCard', () => {
  let component: DerivativeKanaCard;
  let fixture: ComponentFixture<DerivativeKanaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DerivativeKanaCard],
    }).compileComponents();

    fixture = TestBed.createComponent(DerivativeKanaCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
