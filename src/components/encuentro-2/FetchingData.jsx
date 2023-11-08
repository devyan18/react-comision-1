import { useEffect, useState } from "react";

const FetchingData = () => {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
      });
  }, []);

  return (
    <div>
      <h1>{JSON.stringify(todo)}</h1>
    </div>
  );
};
export default FetchingData;
