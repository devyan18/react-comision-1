import { useParams } from "react-router-dom";
import TaskItem from "../components/encuentro-1/TaskItem";
import useTodo from "../hooks/useTodo";

const OneTaskPage = () => {
  const { taskId } = useParams();

  const { todo, isLoading } = useTodo(taskId);

  if (isLoading) return <p>Cargando...</p>;

  return (
    <div>
      OneTaskPage:
      <TaskItem done={todo.completed} title={todo.title} />
    </div>
  );
};
export default OneTaskPage;

// SERVER API
// Mongo, Mysql
