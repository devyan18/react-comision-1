import { Button } from "react-bootstrap";

const TaskItem = ({ title, done }) => {
  return (
    <div>
      <span>{title} </span>
      <Button variant={done ? "success" : "danger"} size="sm">
        {done ? "completado" : "completar"}
      </Button>
    </div>
  );
};
export default TaskItem;
