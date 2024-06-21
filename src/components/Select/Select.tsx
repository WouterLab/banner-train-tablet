import cn from "classnames";
import {
  OptionType,
  SelectProps,
  SelectShape,
  SelectSize,
  SelectVariant,
} from "./types";
import {
  bigStyles,
  disabledStyles,
  mediumStyles,
  outlineStyles,
  roundStyles,
  smallStyles,
  SelectMenu,
  SelectWrapper,
  arrowStyles,
  reverseStyles,
  selectStyles,
} from "./styled";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { Option } from "./helpers/Option";
import { COLORS } from "../Colors";

function ArrowSvg({ ...args }: HTMLAttributes<SVGElement>) {
  return (
    <svg
      fill='none'
      height='800px'
      width='800px'
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 330 330'
      xmlSpace='preserve'
      {...args}
    >
      <path
        id='XMLID_225_'
        d='M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z'
        fill={COLORS.NEUTRAL[90]}
      />
    </svg>
  );
}

export function Select({
  options,
  onChange,
  className,
  selected,
  variant = SelectVariant.Filled,
  shape = SelectShape.Square,
  size = SelectSize.Medium,
  disabled,
  isOpenDefault = false,
  ...args
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  const SelectRef = useRef<HTMLDivElement>(null);

  const arrowClass = cn(arrowStyles, {
    [reverseStyles]: isOpen,
  });

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { target } = e;
      if (target instanceof Node && !SelectRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  const handleOptionClick = (value: OptionType) => {
    setIsOpen(false);
    onChange(value);
  };

  const getSizeClassName = () => {
    switch (size) {
      case SelectSize.Big:
        return bigStyles;
      case SelectSize.Small:
        return smallStyles;
      default:
        return mediumStyles;
    }
  };

  const selectClassName = cn(
    selectStyles,
    getSizeClassName(),
    {
      [disabledStyles]: disabled,
      [roundStyles]: shape === SelectShape.Round,
      [outlineStyles]: variant === SelectVariant.Outline,
    },
    className,
  );

  const toggleSelect = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SelectWrapper ref={SelectRef} {...args}>
      <div className={selectClassName} onClick={toggleSelect}>
        <div>{selected.label}</div>
        <ArrowSvg className={arrowClass} />
      </div>
      {isOpen && (
        <SelectMenu>
          {options.map(({ value, label }: OptionType) => (
            <Option
              value={value}
              key={value}
              className={selectClassName}
              onClick={handleOptionClick}
              label={label}
            />
          ))}
        </SelectMenu>
      )}
    </SelectWrapper>
  );
}
