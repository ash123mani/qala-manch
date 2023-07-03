import React from "react";
import clsx from "clsx";

import { BtnProps } from './types';
import btnClassNames from './style.module.scss';

const Button: React.FC<BtnProps> = ({ children, size = "large", type = "button", className, variant = "primary", disabled = false }) => {
  const btnClassName = clsx(
    'button',
    className,
    size && `${btnClassNames[`button--${variant}--${size}`]}`,
    variant && `${btnClassNames[`button--${variant}`]}`
  )

  return (
    <button type={type} className={btnClassName} disabled={disabled}>{children}</button>
  )
}
export default Button