import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewHiragana } from './overview-hiragana.component';

describe('OverviewHiragana', () => {
  let component: OverviewHiragana;
  let fixture: ComponentFixture<OverviewHiragana>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverviewHiragana],
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewHiragana);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
