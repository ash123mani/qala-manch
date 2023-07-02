export interface InputProps {
  className?: string;
  type: Type;
  size: Size | "medium";
  placeholder: string;
  errorMessage?: string;
  disabled?: boolean | false;
}

export type Type = "input" | "textarea"

export type Size = "large" | "medium" | "small";