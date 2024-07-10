import { Input } from "#components/Input";
import { Dispatch, SetStateAction, useState } from "react";
import { stylesInput, Wrapper } from "./styled";
import { Button } from "#components/Button";

type LoginProps = {
  setLogged: Dispatch<SetStateAction<boolean>>;
};

export const Login = ({ setLogged }: LoginProps) => {
  const [loginValue, setLoginValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const handleClick = () => {
    if (loginValue === "админ" && passValue === "дымдымыч") setLogged(true);
    else return;
  };

  return (
    <Wrapper>
      <Input
        value={loginValue}
        onChange={(e) => setLoginValue(e.target.value)}
        placeholder='Логин'
        type='password'
        className={stylesInput}
      />
      <Input
        value={passValue}
        onChange={(e) => setPassValue(e.target.value)}
        placeholder='Пароль'
        type='password'
        className={stylesInput}
      />
      <Button onClick={handleClick} text='Войти' />
    </Wrapper>
  );
};
