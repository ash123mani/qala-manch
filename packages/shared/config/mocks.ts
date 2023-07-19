import { Step } from '../types';

export const mockSteps: Array<Step> = [
  {
    title: 'Basic Info',
    description: 'Provide Basic Info',
    status: 'finish'
  },
  {
    title: 'Art Info',
    description: 'Provide Art Info',
    status: 'progress'
  },
  {
    title: 'Upload work',
    description: 'Provide Your work',
    status: 'wait'
  },
  {
    title: 'Connect your account',
    description: 'You can connect your account',
    status: 'wait'
  },
  {
    title: 'Bye Bye Note!',
    description: 'GoddBye!!',
    status: 'wait'
  }
]

export const mockStepWithFinishAndError: Array<Step> = [
  {
    title: 'Basic Info',
    description: 'Provide Basic Info',
    status: 'finish'
  },
  {
    title: 'Art Info',
    description: 'Provide Art Info',
    status: 'finish'
  },
  {
    title: 'Upload work',
    description: 'Provide Your work',
    status: 'error'
  },
  {
    title: 'Connect your account',
    description: 'You can connect your account',
    status: 'progress'
  },
  {
    title: 'Bye Bye Note!',
    description: 'GoddBye!!',
    status: 'wait'
  }
]
