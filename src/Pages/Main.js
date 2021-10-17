import InputBtnField from "../components/input-field/InputBtnField";
import Task from "../components/task/Task";
import "../app.css";
import { useState } from "react";

function Main() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) =>
    setTasks((tasks) => [
      ...tasks,
      {
        id: tasks.length,
        name: newTask,
        description: "",
        done: false,
      },
    ]);

  const deleteTask = (task) => setTasks(tasks.filter((t) => t.id !== task.id));

  const updateTask = (task, isDone) => {
    setTasks(tasks.map((t) => (t.id === task.id ? { ...t, done: isDone } : t)));
  };

  return (
    <div className="margin-top">
      <InputBtnField
        placeholder="Write a task.."
        btnText="Create"
        onClick={addTask}
      />
      {tasks.map((task) => (
        <Task task={task} deleteClick={deleteTask} update={updateTask} />
      ))}
    </div>
  );
}

export default Main;
