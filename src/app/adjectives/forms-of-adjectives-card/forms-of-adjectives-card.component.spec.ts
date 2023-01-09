import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsOfAdjectivesCard } from './forms-of-adjectives-card.component';

describe('FormsOfAdjectivesCard', () => {
  let component: FormsOfAdjectivesCard;
  let fixture: ComponentFixture<FormsOfAdjectivesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsOfAdjectivesCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsOfAdjectivesCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
