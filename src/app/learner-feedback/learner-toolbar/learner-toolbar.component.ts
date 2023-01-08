import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'learner-toolbar',
  templateUrl: './learner-toolbar.component.html',
  styleUrls: ['./learner-toolbar.component.scss']
})
export class LearnerToolbar implements OnInit {
  learnerSuccess: number = 0;
  learnerFailure: number = 0;

  constructor() {}
   
  ngOnInit(): void {
    this.getLearnerStatus();
  }

  private getLearnerStatus(): void {
    let localStorageLearnerStatus : string | null = window.localStorage.getItem('learnerStatus');
    let currentLearnerStatus : Array<boolean>;

    if (localStorageLearnerStatus != null) {
      currentLearnerStatus = JSON.parse(localStorageLearnerStatus);
      this.learnerSuccess = currentLearnerStatus.filter(Boolean).length;
      this.learnerFailure = currentLearnerStatus.length - this.learnerSuccess;
    }

  } // reading current learner-status from local storage

  onLearnerStatusUpdate(success: boolean): void {
    let currentLearnerStatus : string | null = window.localStorage.getItem('learnerStatus');
    let learnerStatus: Array<boolean> = [];

    if (currentLearnerStatus != null) {
      learnerStatus = JSON.parse(currentLearnerStatus);
    }
    
    learnerStatus.push(success);
    window.localStorage.setItem('learnerStatus', JSON.stringify(learnerStatus));

    this.learnerSuccess = learnerStatus.filter(Boolean).length;
    this.learnerFailure = learnerStatus.length - this.learnerSuccess;
  } // saving / updating the new learner-status in local storage for visualization
}
 