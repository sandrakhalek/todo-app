import InputBtnField from "../components/input-field/InputField";
import Task from "../components/task/Task";
import "../app.css";

function Main() {
  return (
    <div className="margin-top">
      <InputBtnField placeholder="Write a task.." btnText="Create" />

      {/* list of all the tasks */}
      <Task taskName="task1" />
      <Task taskName="task2" />
    </div>
  );
}

export default Main;
