import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanaDropdown } from './kana-dropdown.component';

describe('KanaDropdown', () => {
  let component: KanaDropdown;
  let fixture: ComponentFixture<KanaDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanaDropdown],
    }).compileComponents();

    fixture = TestBed.createComponent(KanaDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
