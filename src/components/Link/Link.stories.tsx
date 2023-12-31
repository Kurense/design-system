import type { Meta, StoryObj } from '@storybook/react';
import { Link as MuiLink } from '@mui/material';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Text Link',
  component: MuiLink,
  tags: ['autodocs'],
} satisfies Meta<typeof MuiLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Link: Story = {
  render: () => {
    return (
      <MuiLink>Default</MuiLink>
    );
  },
};
