import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// routing
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

// writing
import { Kana } from './writing/kana/kana.component';
import { CompositeKanaCard } from './writing/composite-kana-card/composite-kana-card.component';
import { OverviewHiragana } from './writing/overview-hiragana/overview-hiragana.component';
import { OverviewKatakana } from './writing/overview-katakana/overview-katakana.component';

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
import { KanaDropdown } from './shared-components/kana-dropdown/kana-dropdown.component';

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
  //   path: 'writing',
  // },
  {
    path: 'writing/overview-hiragana',
    component: OverviewHiragana,
    title: 'Overview: Hiragana',
  },
  {
    path: 'writing/overview-katakana',
    component: OverviewKatakana,
    title: 'Overview: Katakana',
  },
  // {
  //   path: 'adjectives',
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
    // writing
    Kana,
    CompositeKanaCard,
    OverviewHiragana,
    OverviewKatakana,
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
    KanaDropdown,
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
