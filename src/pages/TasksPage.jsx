import TaskItem from "../components/TaskItem";

const taskList = [
  {
    id: 1,
    title: "Learn React",
    done: true,
  },
  {
    id: 2,
    title: "Learn JSX",
    done: false,
  },
  {
    id: 3,
    title: "Learn Hooks",
    done: false,
  },
];

const TasksPage = () => {
  return (
    <div>
      {taskList.map((task) => {
        return <TaskItem key={task.id} title={task.title} done={task.done} />;
      })}
    </div>
  );
};
export default TasksPage;
