import { Story, Meta } from '@storybook/angular';
import { KanjiWithHiragana } from 'src/app/shared-components/kanji-with-hiragana/kanji-with-hiragana.component';

export default {
  title: 'Writing',
  component: KanjiWithHiragana,
} as Meta;

const TEMPLATE: Story<KanjiWithHiragana> = (args: KanjiWithHiragana) => ({
  props: args,
});

export const KANJI_WITH_HIRAGANA = TEMPLATE.bind({});

KANJI_WITH_HIRAGANA.args = {
  data: { kanji: '侍', hiragana: 'さむらい', pronunciation: 'sa-mu-ra-i' },
};

KANJI_WITH_HIRAGANA.storyName = 'Kanji with Hiragana';
