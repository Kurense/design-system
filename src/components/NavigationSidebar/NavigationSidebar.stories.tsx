// NavigationSidebar.stories.tsx
import { Meta, Story } from '@storybook/react';
import NavigationSidebar from './NavigationSidebar';

export default {
  title: 'Components/NavigationSidebar',
  component: NavigationSidebar,
} as Meta;

const Template: Story = (args) => <NavigationSidebar {...args} />;

export const Default = Template.bind({});
