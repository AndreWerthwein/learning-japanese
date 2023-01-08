import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerToolbar } from './learner-toolbar.component';

describe('LearnerToolbar', () => {
  let component: LearnerToolbar;
  let fixture: ComponentFixture<LearnerToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerToolbar ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnerToolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
