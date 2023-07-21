import React from "react";
import clsx from "clsx";

import clsn from "./style.module.scss";
import {InputProps} from "./types";

const Input = ({
  className,
  type = "input",
  size = "large",
  placeholder,
  errorMessage,
  disabled,
  onChange,
}: InputProps): JSX.Element => {
  const blkClassName = clsx(className, clsn["input-wrapper"]);

  const inputBoxClassName = clsx(
    clsn.input,
    size && `${clsn[`input--${size}`]}`,
    errorMessage && `${clsn[`input--error`]}`
  );

  const errorBoxClassName = clsx(
    clsn["error-message"],
    size && `${clsn[`error-message--${size}`]}`
  );

  return (
    <div className={blkClassName}>
      <input
        className={inputBoxClassName}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
      {errorMessage && <div className={errorBoxClassName}>{errorMessage}</div>}
    </div>
  );
};

export default Input;
