import useCounter from "../../hooks/useCounter";

const Counter = () => {
  const { counter, sumar, restar, reset } = useCounter();

  return (
    <div>
      <p>counter: {counter}</p>
      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
export default Counter;
