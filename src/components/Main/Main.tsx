import { Button, ButtonVariant } from "#components/Button";
import { Input } from "#components/Input";
import { OptionType, Select } from "#components/Select";
import { Wrapper, Form } from "./styled";
import { useState } from "react";

const options = [
  { label: "Вариант 1", value: "Вариант 1" },
  { label: "Вариант 2", value: "Вариант 2" },
];

export function Main() {
  const [name, setName] = useState("");
  const [selectValue, setSelectValue] = useState(options[0]);

  const handleSubmit = async () => {
    await fetch("http://95.163.235.173:3000/names", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    setName("");
  };

  const handleChange = (selected: OptionType) => {
    setSelectValue(selected);
  };

  return (
    <Wrapper>
      <Form>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Ваше имя'
        />
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Фраза'
        />
        <Select
          options={options}
          selected={selectValue}
          onChange={handleChange}
        />
        <Button
          onClick={handleSubmit}
          text='Отправить'
          variant={ButtonVariant.Outline}
        />
      </Form>
    </Wrapper>
  );
}
