import type { NextPage } from "next";
import React, {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  RefObject,
  useId,
} from "react";

import styles from "@styles/components/UI/input.module.scss";

type Props = {
  label?: string;
  value?: string | number;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  elRef?: RefObject<HTMLInputElement>;
  error?: string | null;
  autoComplete?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
};

const Input: NextPage<Props> = ({
  label,
  type = "text",
  placeholder = "",
  required = false,
  elRef,
  error,
  onChange = undefined,
  autoComplete = false,
  disabled = false,
  className = "",
  onKeyDown,
  value,
}) => {
  const id = useId();

  return (
    <div
      className={`${styles.input} ${
        error ? styles.input__error : ""
      } ${className}`}
    >
      {label && (
        <label htmlFor={id} className={styles.input__label}>
          {label}
        </label>
      )}

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={styles.input__el}
        required={required}
        ref={elRef}
        onChange={onChange}
        autoComplete={autoComplete ? "on" : "new-password"}
        disabled={disabled}
        value={value}
        onKeyDown={onKeyDown}
      />

      {error && <p className={styles.input__error}>{error}</p>}
    </div>
  );
};

export default Input;
