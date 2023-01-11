import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNoticesFooterComponent } from './legal-notices-footer.component';

describe('LegalNoticesFooterComponent', () => {
  let component: LegalNoticesFooterComponent;
  let fixture: ComponentFixture<LegalNoticesFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalNoticesFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalNoticesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
