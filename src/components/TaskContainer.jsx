import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

function TaskContainer() {
  const [tasks, setTask] = useState([]);

  return (
    <div className="w-11/12 max-w-xl bg-cyan-400 drop-shadow-xl px-3 py-2 mt-3 rounded-md">
      <TaskForm />
      <div className="flex justify-center flex-wrap mt-3 max-h-96 overflow-auto">
        {tasks.map((task) => (
          <Task isCompleted={task.isCompleted} text={task.text} />
        ))}
      </div>
    </div>
  );
}

export default TaskContainer;
