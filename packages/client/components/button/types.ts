import { Size } from '@/utils/types';
import { ReactNode } from "react";

export interface BtnProps {
  size?: Size | 'medium';
  type?: Type;
  className?: string;
  children: ReactNode;
  variant?: string;
}

export type Type = 'button' | 'submit' | 'reset';

export type Variant = 'primary' | 'outline' | 'ghost' | 'link' | 'danger'