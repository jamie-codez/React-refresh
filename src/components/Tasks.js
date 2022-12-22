import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        /> // If you get key error here use index eg tasks.map(task,index) ....<Task key={index} .....
      ))}
    </>
  );
};

export default Tasks;
