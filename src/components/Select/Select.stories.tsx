import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'
import { MenuItem } from '@mui/material';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta;
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args: {
    displayEmpty: true,
    value: '',
    children: <>
      <MenuItem value={10}>Option 1</MenuItem>
      <MenuItem value={20}>Option 2</MenuItem>
      <MenuItem value={30}>Option 3</MenuItem>
    </>
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    displayEmpty: true,
    value: '',
    children: <>
      <MenuItem value={10}>Option 1</MenuItem>
      <MenuItem value={20}>Option 2</MenuItem>
      <MenuItem value={30}>Option 3</MenuItem>
    </>
  }
}

