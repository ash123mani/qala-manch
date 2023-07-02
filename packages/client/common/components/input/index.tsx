import React from 'react';
import clsx from 'clsx';

import inputClasseNames from './style.module.scss'
import { InputProps } from './types';

console.log('inputClasseNames', inputClasseNames)

const Input = ({ className, type, size, placeholder, errorMessage, disabled }: InputProps): JSX.Element => {
  const blkClassName = clsx(
    className,
    inputClasseNames['input-wrapper'],
  );

  const inputBoxClassName = clsx(
    inputClasseNames.input,
    size && `${inputClasseNames[`input--${size}`]}`,
    errorMessage && `${inputClasseNames[`input--error`]}`
  )

  const errorBoxClassName = clsx(
    inputClasseNames['error-message'],
    size && `${inputClasseNames[`error-message--${size}`]}`,
  )

  return (
    <div className={blkClassName}>
      <input className={inputBoxClassName} type={type } placeholder={placeholder} disabled={disabled} />
      {errorMessage && <div className={errorBoxClassName}>{errorMessage}</div>}
    </div>
  )
}

export default Input;