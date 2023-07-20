import type { Meta, StoryObj } from '@storybook/react';
import Step from './index';
import { mockSteps, mockStepWithFinishAndError } from "@qala-manch/shared";

const meta: Meta<typeof Step> = {
  component: Step,
};

export default meta;
type Story = StoryObj<typeof Step>;

export const HorizontalSteps: Story = {
  name: 'Basic Horizontal Steps',
  render: () => <Step steps={mockSteps} />,
};

export const HorizontalSteps_With_Finish_And_Error: Story = {
  name: 'Horizontal Steps with Finish and Error',
  render: () => <Step steps={mockStepWithFinishAndError} />,
};

export const VerticalSteps: Story = {
  name: 'Basic Vertical Steps',
  render: () => <Step steps={mockSteps} type='vertical' />,
};

export const VerticalSteps_With_Finish_And_Error: Story = {
  name: 'Vertical Steps with Finish and Error',
  render: () => <Step steps={mockStepWithFinishAndError} type='vertical' />,
};