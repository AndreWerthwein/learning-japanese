import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// vocabulary
import { VocabularyCard } from './vocabulary/vocabulary-card/vocabulary-card.component';

// learner-feedback
import { LearnerToolbar } from './learner-feedback/learner-toolbar/learner-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    // vocabulary
    VocabularyCard,
    // learner-feedback
    LearnerToolbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
