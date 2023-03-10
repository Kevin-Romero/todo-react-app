import React from "react";
import TaskForm from "./TaskForm";

function TaskContainer() {
  return (
    <div className="w-11/12 max-w-xl h-auto bg-cyan-400 drop-shadow-xl px-3 py-2 mt-3">
      <TaskForm />
    </div>
  );
}

export default TaskContainer;
