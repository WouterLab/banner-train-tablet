import { Wrapper } from "./styled";
import { FormEvent, useState } from "react";

export function Home() {
  const [name, setName] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:3000/names", {
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
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your name'
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </Wrapper>
  );
}
