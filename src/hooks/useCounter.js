import { useState } from "react";

function useCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  const sumar = () => setCounter(counter + 1);
  const restar = () => setCounter(counter - 1);
  const reset = () => setCounter(initialValue);

  return { counter, sumar, restar, reset };
}

export default useCounter;
