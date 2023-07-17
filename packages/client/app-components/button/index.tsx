import React from "react";
import clsx from "clsx";

import { BtnProps } from "./types";
import btnClassNames from "./style.module.scss";

const Button = ({
  children,
  size = "large",
  type = "button",
  className,
  variant = "primary",
  disabled = false,
  onSubmit,
  onClick,
}: BtnProps): JSX.Element => {
  const btnClassName = clsx(
    "button",
    className,
    size && `${btnClassNames[`button--${variant}--${size}`]}`,
    variant && `${btnClassNames[`button--${variant}`]}`
  );

  return (
    <button
      type={type}
      className={btnClassName}
      disabled={disabled}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {children}
    </button>
  );
};
export default Button;
