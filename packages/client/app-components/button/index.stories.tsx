import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';


const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'outline'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'inline-radio' },
    },
    type: {
      options: ['submit', 'button', 'reset'],
      control: { type: 'select' }
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' }
  },
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    children: 'Subsc Channel',
    variant: 'primary',
  }
}