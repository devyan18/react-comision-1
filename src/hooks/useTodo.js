import { useState, useEffect } from "react";

function useTodo(taskId) {
  const [todo, setTodo] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [taskId]);

  return { todo, isLoading };
}

export default useTodo;
