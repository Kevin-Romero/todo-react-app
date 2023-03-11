import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

function TaskContainer() {
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("taskListUpdate")) || []
  );

  // setTask(JSON.parse(localStorage.getItem("taskListUpdate")));

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const taskListUpdate = [...tasks, task];
      localStorage.setItem("taskListUpdate", JSON.stringify(taskListUpdate));
      setTask(taskListUpdate);
    }
  };

  const deleteTask = (id) => {
    const taskListUpdate = tasks.filter((task) => task.id !== id);
    localStorage.setItem("taskListUpdate", JSON.stringify(taskListUpdate));
    setTask(taskListUpdate);
  };

  const completedTask = (id) => {
    const taskListUpdate = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    localStorage.setItem("taskListUpdate", JSON.stringify(taskListUpdate));
    setTask(taskListUpdate);
  };

  return (
    <div className="w-11/12 max-w-xl bg-cyan-400 drop-shadow-xl px-3 py-2 mt-3 rounded-md">
      <TaskForm onSubmit={addTask} />
      <div className="flex justify-center flex-wrap mt-3 max-h-96 overflow-auto">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            isCompleted={task.isCompleted}
            completed={completedTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskContainer;
