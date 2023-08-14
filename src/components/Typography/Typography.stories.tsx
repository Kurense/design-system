import type { Meta, StoryObj } from '@storybook/react';

import { Typography as Component } from './Typography';
import { Box } from '@mui/material';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Typography',
  component: Component,
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Typography: Story = {
  render: () => {
    return (
      <Component>Typography</Component>
    );
  },
};

export const Heading = {
  render: () => {
    return (
      <Box sx={{
        display: `grid`,
        gridTemplateColumns: `repeat(4, 150px)`,
        alignItems: `end`,
        gap: 2,
      }}>
        <Component variant='h1'>Heading 1</Component>
        <Component variant='h2'>Heading 2</Component>
        <Component variant='h3'>Heading 3</Component>
        <Component variant='h4'>Heading 4</Component>
      </Box>
    );
  },
};

export const Body = {
  render: () => {
    return (
      <Box sx={{
        display: `grid`,
        gridTemplateColumns: `repeat(2, 75px)`,
        alignItems: `end`,
        gap: 2,
      }}>
        <Component variant='body1'>Body 1</Component>
        <Component variant='body2'>Body 2</Component>
      </Box>
    );
  },
};