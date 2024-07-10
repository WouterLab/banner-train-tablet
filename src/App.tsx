import { Login } from "#components/Login";
import { Main } from "#components/Main";
import { useEffect, useState } from "react";

export function App() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {}, []);

  return logged ? <Main /> : <Login setLogged={setLogged} />;
}
