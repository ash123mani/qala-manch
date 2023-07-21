import React from "react";
import clsx from "clsx";

import { BtnProps } from "./types";
import clsn from "./style.module.scss";

const Button = ({
  children,
  size = "medium",
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
    size && `${clsn[`button--${variant}--${size}`]}`,
    variant && `${clsn[`button--${variant}`]}`
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
