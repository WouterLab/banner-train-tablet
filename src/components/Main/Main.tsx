import { Button, ButtonVariant } from "#components/Button";
import { Input } from "#components/Input";
import { ListItem } from "#components/ListItem";
import { Wrapper, Form, Title, Select } from "./styled";
import { ChangeEvent, useEffect, useState } from "react";

const options = [
  { label: "куролесит", value: "куролесит" },
  { label: "колбасит", value: "колбасит" },
  {
    label: "опаздывает на тотальный расколбас",
    value: "опаздывает на тотальный расколбас",
  },
  { label: "только что отлетел", value: "только что отлетел" },
  {
    label: "в зоне раскОлбасной курбулентности",
    value: "в зоне раскОлбасной курбулентности",
  },
  {
    label: "ожидается на посадку в улетный движ",
    value: "ожидается на посадку в улетный движ",
  },
  { label: "всё по колбасе", value: "всё по колбасе" },
  { label: "в птичьем восторге", value: "в птичьем восторге" },
  {
    label: "отлетает классно и колбасно",
    value: "отлетает классно и колбасно",
  },
  { label: "полный улёт", value: "полный улёт" },
  {
    label: "уже на высоте птичьего полета",
    value: "уже на высоте птичьего полета",
  },
  {
    label: "отправляется в расколбасное путешествие рейсом VK fest – полный улёт",
    value: "отправляется в расколбасное путешествие рейсом VK fest – полный улёт",
  },
  { label: "держит курс на курочек", value: "держит курс на курочек" },
];

export function Main() {
  const [name, setName] = useState("");
  const [phrase, setPhrase] = useState(options[0].label);
  const [ownPhrase, setOwnPhrase] = useState(
    "Your text here                   or on new line                                                                                ",
  );
  const [step, setStep] = useState(2);

  const handleSubmit = async () => {
    const data = { name, phrase };

    await fetch("https://dapanov.ru/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setName("");
    setPhrase("");
    setStep(0);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPhrase(e.target.value);
  };

  useEffect(() => {
    setPhrase(options[0].label);
  }, []);

  const replaceChar = (str: string, index: number, char: string) => {
    const array = str.split("");
    array[index] = char;
    return array.join("");
  };

  const handlePhraseChange = (value: string, index: number) => {
    const nextInput = document.getElementById(`input-${index + 1}`);

    if (value === "") {
      const newValue = replaceChar(ownPhrase, index, " ");
      setOwnPhrase(newValue);
      nextInput?.focus();
      return;
    }
    if (value.startsWith(" ")) {
      const newValue = replaceChar(ownPhrase, index, value.slice(1, 2));
      setOwnPhrase(newValue);
      nextInput?.focus();
      return;
    }
    const newValue = replaceChar(ownPhrase, index, value.slice(0, 1));
    setOwnPhrase(newValue);
    nextInput?.focus();
    return;
  };

  return (
    <Wrapper>
      <Form>
        {step === 0 && (
          <>
            <Title>Введите имя</Title>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Имя' />
            <Button
              onClick={() => setStep((prev) => prev + 1)}
              text='Продолжить'
              variant={ButtonVariant.Outline}
            />
          </>
        )}
        {step === 1 && (
          <>
            <Title>Выберите фразу или впишите свой вариант</Title>
            <Select name={phrase} value={phrase} onChange={(e) => handleChange(e)}>
              {options.map((option) => (
                <option
                  value={option.value}
                  key={option.value}
                  style={{ color: "#222", fontWeight: 500 }}
                >
                  {option.label}
                </option>
              ))}
            </Select>
            <Button
              onClick={() => setStep((prev) => prev - 1)}
              text='Назад'
              variant={ButtonVariant.Outline}
            />
            <Button
              onClick={() => setStep((prev) => prev + 1)}
              text='Свой вариант'
              variant={ButtonVariant.Outline}
            />
            <Button onClick={handleSubmit} text='Отправить' variant={ButtonVariant.Outline} />
          </>
        )}
        {step === 2 && (
          <>
            <Title>Ваша фраза</Title>
            <ListItem time='00:00' ownPhrase={ownPhrase} onChange={handlePhraseChange} />
            <Button
              onClick={() => setStep((prev) => prev - 1)}
              text='Назад'
              variant={ButtonVariant.Outline}
            />
            <Button onClick={handleSubmit} text='Отправить' variant={ButtonVariant.Outline} />
          </>
        )}
      </Form>
    </Wrapper>
  );
}
