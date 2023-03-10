import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprint } from './imprint.component';

describe('Imprint', () => {
  let component: Imprint;
  let fixture: ComponentFixture<Imprint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Imprint],
    }).compileComponents();

    fixture = TestBed.createComponent(Imprint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
