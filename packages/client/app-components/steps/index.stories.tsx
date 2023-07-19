import type { Meta, StoryObj } from '@storybook/react';
import Step from './index';
import { mockSteps, mockStepWithFinishAndError } from "@qala-manch/shared";

const meta: Meta<typeof Step> = {
  component: Step,
};

export default meta;
type Story = StoryObj<typeof Step>;

export const HorizontalSteps: Story = {
  name: 'Basic Steps',
  render: () => <Step steps={mockSteps} />,
};

export const HorizontalSteps_With_Finish_And_Error: Story = {
  name: 'Horizontal with Finish and Error',
  render: () => <Step steps={mockStepWithFinishAndError} />,
};