import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryTable } from './dictionary-table.component';

describe('DictionaryTable', () => {
  let component: DictionaryTable;
  let fixture: ComponentFixture<DictionaryTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryTable ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DictionaryTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
