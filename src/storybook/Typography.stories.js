import Typography from './Typography.svelte';

export default {
  component: Typography,
  title: 'Typography',
};

const Template = ({...args }) => ({
  Component: Typography,
  props: args,
});

export const Default = Template.bind({});
