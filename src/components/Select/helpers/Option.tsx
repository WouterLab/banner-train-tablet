import { styled } from "@linaria/react";
import { MouseEventHandler } from "react";
import { OptionType } from "..";

export const OptionStyled = styled.li`
  transition: all 0.3s;
  width: 100%;
  cursor: pointer;
`;

type OptionProps = {
  value: string;
  className?: string;
  onClick: (value: OptionType) => void;
  label: string;
};

export function Option({ value, className, onClick, label }: OptionProps) {
  const handleClick =
    (clickedValue: OptionType): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue);
    };

  return (
    <OptionStyled
      onClick={handleClick({ value, label })}
      className={className}
      value={value}
      tabIndex={0}
    >
      {label}
    </OptionStyled>
  );
}
