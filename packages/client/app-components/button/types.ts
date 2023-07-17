import { Size } from '@/utils/types';
import { ReactNode } from "react";

export interface BtnProps {
  size?: Size;
  type?: Type;
  className?: string;
  children: ReactNode;
  variant?: Variant;
  disabled?: boolean;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export type Type = 'button' | 'submit' | 'reset';

export type Variant = 'primary' | 'outline' | 'ghost' | 'link' | 'danger'