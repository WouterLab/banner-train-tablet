import cn from "classnames";
import { InputProps, InputSize, InputVariant } from "./types";
import { ChangeEvent, useState } from "react";
import {
  Wrapper,
  bigStyles,
  disabledStyles,
  mediumStyles,
  outlineStyles,
  smallStyles,
} from "./styled";

export function Input({
  value,
  variant = InputVariant.Filled,
  size = InputSize.Medium,
  className,
  disabled,
  onChange,
  placeholder,
  ...args
}: InputProps) {
  const [inputValue, setInputValue] = useState(value || "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    if (onChange) {
      onChange(e);
    }
  };

  const getSizeClassName = () => {
    switch (size) {
      case InputSize.Big:
        return bigStyles;
      case InputSize.Small:
        return smallStyles;
      default:
        return mediumStyles;
    }
  };

  const getVariantClassName = () => {
    switch (variant) {
      case InputVariant.Outline:
        return outlineStyles;
      default:
        return "";
    }
  };

  const inputClass = cn(
    getVariantClassName(),
    getSizeClassName(),
    {
      [disabledStyles]: disabled,
    },
    className,
  );

  return (
    <Wrapper
      value={inputValue}
      className={inputClass}
      disabled={disabled}
      onChange={handleChange}
      placeholder={placeholder}
      {...args}
    />
  );
}
