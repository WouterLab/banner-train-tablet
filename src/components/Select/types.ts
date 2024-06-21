/**
 * Enum defining the possible shapes for the select component
 */
export enum SelectShape {
  Round = "round",
  Square = "square",
}

/**
 * Enum defining the possible sizes for the select component
 */
export enum SelectSize {
  Small = "small",
  Medium = "medium",
  Big = "big",
}

/**
 * Enum defining the possible variants for the select component
 */
export enum SelectVariant {
  Filled = "filled",
  Outline = "outline",
}

/**
 * Type representing an option in the select component
 */
export type OptionType = {
  label: string;
  value: string;
};

/**
 * Interface defining the props for the Select component
 */
export interface SelectProps {
  /** Additional class name for styling */
  className?: string;
  /** Flag indicating whether the select is disabled */
  disabled?: boolean;
  /** The variant (filled or outline) for the select */
  variant?: SelectVariant;
  /** The size (small, medium, or big) for the select */
  size?: SelectSize;
  /** The shape (round or square) for the select */
  shape?: SelectShape;
  /** The currently selected option */
  selected: OptionType;
  /** Callback function triggered on option change */
  onChange: (selected: OptionType) => void;
  /** Array of options to populate the select dropdown */
  options: OptionType[];
  /** Flag indicating whether the dropdown should be open by default */
  isOpenDefault?: boolean;
}
