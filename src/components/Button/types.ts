export enum ButtonShape {
  Round = "round",
  Square = "square",
}

export enum ButtonSize {
  Small = "small",
  Medium = "medium",
  Big = "big",
}

export enum ButtonVariant {
  Filled = "filled",
  Ghost = "ghost",
  Outline = "outline",
}

export interface ButtonProps {
  /** Button content */
  text: string;

  /** Button type as filled, transparent or empty with border */
  variant?: ButtonVariant;

  /** Button shape: round or square */
  shape?: ButtonShape;

  /** Button size */
  size?: ButtonSize;

  /** Button custom classnames */
  className?: string;

  /** Button disabled or not option */
  disabled?: boolean;

  /** Optional click handler */
  onClick?: () => void;
}
