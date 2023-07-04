import { Size } from '@/utils/types';

export interface InputProps {
  className?: string;
  type?: Type;
  size: Size;
  placeholder: string;
  errorMessage?: string;
  disabled?: boolean | false;
  onChange: (e: React.SyntheticEvent) => void;
}

export type Type = "input" | "textarea"

