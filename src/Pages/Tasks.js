import React, { useState } from "react";
import Alert from "../components/alert/Alert";
import InputField from "../components/input-field/InputField";
import Task from "../components/task/Task";

function Tasks(props) {
    const [tasks, setTasks] = useState([]);
    const [alerts, setAlerts] = useState([]);

    const addTask = (newTask) => {
        setTasks(tasks => [...tasks, {
            id: tasks.length,
            name: newTask,
            description: '',
            done: false
        }])
    };

    const pushErrorAlert = () => {
        setAlerts(alerts => [...alerts, {
            id: alerts.length,
            class: 'alert warning-alert',
            name: 'Input value is empty',
            icon: 'bx bx-x-circle'
        }])
    }

    const setTaskDone = (id) => {
        const index = tasks.findIndex(t => t.id === id);
        const taskToUpdate = tasks[index];
        taskToUpdate.done = !taskToUpdate.done;
        setTasks([...tasks.slice(0, index), taskToUpdate, ...Array.slice(index + 1)]);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    }

    const deleteAlert = (id) => {
        setAlerts(alerts.filter(t => t.id !== id));
    }

    return (
        <main id="todo" role="main">
            <div className="main-content top-space-md">
                <div className="create-block">
                    <InputField
                        addTask={addTask}
                        pushAlert={pushErrorAlert}
                    />
                </div>

                <div className="todo-items">
                    {[...activeTasks, ...doneTasks].map((task) => (
                        <Task
                            task={task}
                            doneTask={() => setTaskDone(task.id)}
                            deleteTask={() => deleteTask(task.id)}
                        />
                    ))}
                    {alerts.map((alert) => (
                        <Alert
                            class={alert.class}
                            content={alert.name}
                            iconClass={alert.icon}
                            deleteAlert={() => deleteAlert(alert.id)}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}


export default Tasks;