import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsOfAdjectivesCardStack } from './forms-of-adjectives-card-stack.component';

describe('FormsOfAdjectivesCardStack', () => {
  let component: FormsOfAdjectivesCardStack;
  let fixture: ComponentFixture<FormsOfAdjectivesCardStack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsOfAdjectivesCardStack],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsOfAdjectivesCardStack);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
