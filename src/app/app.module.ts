import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// routing
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

// vocabulary
import { VocabularyCard } from './vocabulary/vocabulary-card/vocabulary-card.component';
import { VocabularyCardStack } from './vocabulary/vocabulary-card-stack/vocabulary-card-stack.component';

// adjectives
import { FormsOfAdjectivesCard } from './adjectives/forms-of-adjectives-card/forms-of-adjectives-card.component';
import { FormsOfAdjectivesCardStack } from './adjectives/forms-of-adjectives-card-stack/forms-of-adjectives-card-stack.component';

// learner-feedback
import { LearnerToolbar } from './learner-feedback/learner-toolbar/learner-toolbar.component';

// dictionary
import { DictionaryTable } from './dictionary/dictionary-table/dictionary-table.component';

// shared components
import { KanjiWithHiragana } from './shared-components/kanji-with-hiragana/kanji-with-hiragana.component';

// legal notices
import { Imprint } from './legal-notices/imprint/imprint.component';
import { Contact } from './legal-notices/contact/contact.component';
import { PrivacyPolicy } from './legal-notices/privacy-policy/privacy-policy.component';
import { LegalNoticesFooterComponent } from './legal-notices/legal-notices-footer/legal-notices-footer.component';
import { Home } from './home/home.component';

const ROUTES: Routes = [
  {
    path: 'home',
    component: Home,
    title: 'Home',
  },
  {
    path: 'vocabulary',
    component: VocabularyCardStack,
    title: 'Vocabulary',
  },
  // {
  //   path: '/adjectives',
  // },
  {
    path: 'adjectives/forms-of-adjectives',
    component: FormsOfAdjectivesCardStack,
    title: 'Forms of Adjectives',
  },
  {
    path: 'legal-notices/imprint',
    component: Imprint,
    title: 'Imprint',
  },
  {
    path: 'legal-notices/contact',
    component: Contact,
    title: 'Contact',
  },
  {
    path: 'legal-notices/privacy-policy',
    component: PrivacyPolicy,
    title: 'Privacy Policy',
  },
  {
    // ?? default, if url does not math defined routing
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    // vocabulary
    VocabularyCard,
    VocabularyCardStack,
    // learner-feedback
    LearnerToolbar,
    DictionaryTable,
    KanjiWithHiragana,
    FormsOfAdjectivesCard,
    FormsOfAdjectivesCardStack,
    Imprint,
    Contact,
    PrivacyPolicy,
    LegalNoticesFooterComponent,
    Home,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES, {
      scrollPositionRestoration: 'top',
      useHash: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
