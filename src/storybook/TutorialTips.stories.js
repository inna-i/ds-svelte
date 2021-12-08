import TutorialTips from '../TutorialTips/TutorialTips.svelte';

import { action } from '@storybook/addon-actions';

export const actionsData = {
  onClick: action('click'),
};

export default {
  component: TutorialTips,
  title: 'TutorialTips',
  excludeStories: /.*Data$/,
  //👇 The argTypes are included so that they are properly displayed in the Actions Panel
  argTypes: {
    onclick: { action: 'click' },
  },
};

const TutorialTipsTemplate = ({ onclick, ...args }) => ({
  Component: TutorialTips,
  props: args,
  on: {
    ...actionsData,
  },
});

export const Default = TutorialTipsTemplate.bind({});

Default.args = {
  tipsPosition: 'bottom',
  title: 'Tutorial title heading',
  subTitle: 'Feature name',
  description: 'Social proof niche market ownership early adopters hypotheses gamification.',
  actions: {
    left: {
      label: 'Back',
      onclick: action('click')
    },
    right: {
      label: 'Accept',
      onclick: action('click')
    }
  } 
};

export const RightPosition = TutorialTipsTemplate.bind({});

RightPosition.args = {
  tipsPosition: 'right',
  title: 'Tutorial title heading',
  subTitle: 'Feature name',
  description: 'Social proof niche market ownership early adopters hypotheses gamification.',
  actions: {
    left: {
      label: 'Back',
      onclick: action('click')
    },
    right: {
      label: 'Accept',
      onclick: action('click')
    }
  } 
};
