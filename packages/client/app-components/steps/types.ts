export interface StepProps {
  type?: 'horizontal' | 'vertical';
  steps: Array<Step>;
}

export type Step = {
  title: string;
  description: string;
  status?: string;
}

export enum Status {
  Progress = 'progress',
  Wait = 'wait',
  Finish = 'finish',
  Error = 'error'
}


export enum Type {
  Vertical = 'vertical',
  Horizontal = 'horizontal'
}