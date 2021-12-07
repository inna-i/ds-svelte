import Button from '../Button/Button.svelte';
import Buttons from './Buttons.svelte';

import { action } from '@storybook/addon-actions';

export const actionsData = {
  onClick: action('click'),
  onmouseover: action('mouseover'),
};

export default {
  component: Button,
  title: 'Button',
  excludeStories: /.*Data$/,
  //👇 The argTypes are included so that they are properly displayed in the Actions Panel
  argTypes: {
    onclick: { action: 'click' },
    mouseover: { action: 'mouseover' },
  },
};

const ButtonsTemplate = ({ onmouseover, onclick, ...args }) => ({
  Component: Buttons,
  props: args,
  on: {
    ...actionsData,
  },
});

const ButtonTemplate = ({ onmouseover, onclick, ...args }) => ({
  Component: Button,
  props: args,
  on: {
    ...actionsData,
  },
});

export const AllButtons = ButtonsTemplate;
export const Primary = ButtonTemplate.bind({});

Primary.args = {
  bsType: 'primary',
  label: 'Primary',
};
