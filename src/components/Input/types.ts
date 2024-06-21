import { ChangeEvent, HTMLAttributes } from "react";

/**
 * Enum defining the possible sizes for the Input component.
 */
export enum InputSize {
  Small = "small" /** The small size option */,
  Medium = "medium" /** The medium size option */,
  Big = "big" /** The big size option */,
}

/**
 * Enum defining the possible variants for the Input component.
 */
export enum InputVariant {
  Filled = "filled" /** The filled variant option */,
  Outline = "outline" /** The outline variant option */,
}

/**
 * Interface defining the props for the Input component.
 */
export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  /** The current value of the input. */
  value: string;

  /** Placeholder text to display when the input is empty. */
  placeholder?: string;

  /** The variant (filled or outline) for the input. */
  variant?: InputVariant;

  /** The size (small, medium, or big) for the input. */
  size?: InputSize;

  /** Additional class name for styling the Input component. */
  className?: string;

  /** Flag indicating whether the input is disabled. */
  disabled?: boolean;

  /** Callback function triggered when the input value changes. */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
