import Link from '../Link/Link.svelte';

import { action } from '@storybook/addon-actions';

export const actionsData = {
  click: action('click'),
  mouseover: action('mouseover'),
};

export default {
  component: Link,
  title: 'Link',
  excludeStories: /.*Data$/,
  //👇 The argTypes are included so that they are properly displayed in the Actions Panel
  argTypes: {
    click: { action: 'click' },
    mouseover: { action: 'mouseover' },
  },
};

const Template = ({ mouseover, click, ...args }) => ({
  Component: Link,
  props: args,
  on: {
    ...actionsData,
  },
});

export const Default = Template.bind({});
Default.args = {
  bsType: 'primary',
  href: 'https://google.com',
};
