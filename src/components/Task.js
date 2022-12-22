const tasks = [
  {
    id: 1,
    text: "Doctors Appointment",
    day: "Feb 5th at 2.30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Meeting at school",
    day: "Feb 6th at 1.30pm",
    reminder: true,
  },
  {
    id: 1,
    text: "Food shopping",
    day: "Feb 5th at 2.30pm",
    reminder: true,
  },
];

const Task = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Task;
