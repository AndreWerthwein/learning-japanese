import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'learner-toolbar',
  templateUrl: './learner-toolbar.component.html',
  styleUrls: ['./learner-toolbar.component.scss'],
})
export class LearnerToolbar implements OnInit {
  learnerSuccess: number = 0;
  learnerSuccessPercentage: number = 0;
  learnerFailure: number = 0;
  learnerFailurePercentage: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.getLearnerStatus();
  }

  private getLearnerStatus(): void {
    let localStorageLearnerStatus: string | null =
      window.localStorage.getItem('learnerStatus');
    let currentLearnerStatus: Array<boolean>;

    if (localStorageLearnerStatus != null) {
      currentLearnerStatus = JSON.parse(localStorageLearnerStatus);

      // ?? absolute
      this.learnerSuccess = currentLearnerStatus.filter(Boolean).length;
      this.learnerFailure = currentLearnerStatus.length - this.learnerSuccess;

      // ?? percentage
      this.learnerSuccessPercentage = this.calculatePercentage(
        this.learnerSuccess
      );
      this.learnerFailurePercentage = this.calculatePercentage(
        this.learnerFailure
      );
    }
  } // reading current learner-status from local storage

  onResetLearnerStatus(): void {
    window.localStorage.removeItem('learnerStatus');
    this.learnerSuccess = 0;
    this.learnerSuccessPercentage = 0;
    this.learnerFailure = 0;
    this.learnerFailurePercentage = 0;
  } // resets current learner-status

  onLearnerStatusUpdate(success: boolean): void {
    let currentLearnerStatus: string | null =
      window.localStorage.getItem('learnerStatus');
    let learnerStatus: Array<boolean> = [];

    if (currentLearnerStatus != null) {
      learnerStatus = JSON.parse(currentLearnerStatus);
    }

    learnerStatus.push(success);
    window.localStorage.setItem('learnerStatus', JSON.stringify(learnerStatus));

    // ?? absolute
    this.learnerSuccess = learnerStatus.filter(Boolean).length;
    this.learnerFailure = learnerStatus.length - this.learnerSuccess;

    // ?? percentages
    this.learnerSuccessPercentage = this.calculatePercentage(
      this.learnerSuccess
    );

    this.learnerFailurePercentage = this.calculatePercentage(
      this.learnerFailure
    );
  } // saving / updating the new learner-status in local storage for visualization

  calculatePercentage(value: number): number {
    return Math.floor(
      (value / (this.learnerSuccess + this.learnerFailure)) * 100
    );
  } // returns the percentage of an input relative to the sum of all answers
}
