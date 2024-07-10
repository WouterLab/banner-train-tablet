import {
  Wrapper,
  Letter,
  stylesGreen,
  stylesWithMargin,
  stylesDisabled,
} from "./styled";

type ListItemProps = {
  time: string;
  ownPhrase: string;
  onChange: (phrase: string, index: number) => void;
};

export function ListItem({ time, ownPhrase, onChange }: ListItemProps) {
  const greenIndexes = [0, 1, 3, 4];
  const indexesWithMargin = [4, 37, 70, 103];
  const disabledIndexes = [0, 1, 2, 3, 4];
  const fullText = (time + ownPhrase).padEnd(99, " ");

  return (
    <Wrapper>
      {fullText.split("").map((char, index) => (
        <Letter
          key={index}
          className={`${greenIndexes.includes(index) ? stylesGreen : ""} 
          ${indexesWithMargin.includes(index) ? stylesWithMargin : ""}
          ${disabledIndexes.includes(index) ? stylesDisabled : ""}`}
        >
          <input
            value={char}
            onChange={(e) => {
              if (index < 5) return;
              onChange(e.target.value, index - 5);
            }}
            max={1}
            id={`input-${index - 5}`}
          />
        </Letter>
      ))}
    </Wrapper>
  );
}
