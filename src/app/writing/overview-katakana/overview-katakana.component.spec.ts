import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewKatakana } from './overview-katakana.component';

describe('OverviewKatakana', () => {
  let component: OverviewKatakana;
  let fixture: ComponentFixture<OverviewKatakana>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverviewKatakana],
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewKatakana);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
