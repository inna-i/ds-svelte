import Colors from '../Colors/Colors.svelte';

export default {
  component: Colors,
  title: 'Colors',
  excludeStories: /.*Data$/,
};

const Template = ({...args }) => ({
  Component: Colors,
  props: args,
});

export const Default = Template.bind({});
