import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kana } from './kana.component';

describe('Kana', () => {
  let component: Kana;
  let fixture: ComponentFixture<Kana>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Kana],
    }).compileComponents();

    fixture = TestBed.createComponent(Kana);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
