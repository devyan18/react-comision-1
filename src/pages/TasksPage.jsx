import { useEffect, useState } from "react";
import TaskItem from "../components/encuentro-1/TaskItem";

const TasksPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <div>
      {todos.map((task) => {
        return (
          <TaskItem key={task.id} title={task.title} done={task.completed} />
        );
      })}
    </div>
  );
};
export default TasksPage;
