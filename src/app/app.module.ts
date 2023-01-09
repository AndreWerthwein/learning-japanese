import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// vocabulary
import { VocabularyCard } from './vocabulary/vocabulary-card/vocabulary-card.component';

// learner-feedback
import { LearnerToolbar } from './learner-feedback/learner-toolbar/learner-toolbar.component';

// dictionary
import { DictionaryTable } from './dictionary/dictionary-table/dictionary-table.component';

// shared components
import { KanjiWithHiragana } from './shared-components/kanji-with-hiragana/kanji-with-hiragana.component';
import { FormsOfAdjectivesCard } from './adjectives/forms-of-adjectives-card/forms-of-adjectives-card.component';

@NgModule({
  declarations: [
    AppComponent,
    // vocabulary
    VocabularyCard,
    // learner-feedback
    LearnerToolbar,
    DictionaryTable,
    KanjiWithHiragana,
    FormsOfAdjectivesCard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
