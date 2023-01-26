import { Story, Meta } from '@storybook/angular';
import { Kana } from 'src/app/writing/kana/kana.component';

export default {
  title: 'Writing',
  component: Kana,
} as Meta;

const TEMPLATE: Story<Kana> = (args: Kana) => ({ props: args });

export const KANA = TEMPLATE.bind({});

KANA.args = {
  data: { kana: 'か', pronunciation: 'ka' },
  showGrid: true,
};

KANA.storyName = 'Japanese Kana';
