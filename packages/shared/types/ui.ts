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