// NavigationSidebar.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import NavigationSidebar from './NavigationSidebar';

const meta = {
  title: 'Components/NavigationSidebar',
  component: NavigationSidebar,
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationSidebar>

export default meta;
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
  }
}
