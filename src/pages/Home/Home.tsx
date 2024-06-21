import { Wrapper, Form, Input, Button } from "./styled";
import { MouseEvent, useState } from "react";

export function Home() {
  const [name, setName] = useState("");

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();

    await fetch("http://95.163.235.173:3000/names", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    setName("");
  };

  return (
    <Wrapper>
      <Form>
        <Input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Ваше имя'
          required
        />
        <Button onClick={(e) => handleSubmit(e)}>Отправить</Button>
      </Form>
    </Wrapper>
  );
}
