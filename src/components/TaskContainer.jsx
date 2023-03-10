import React from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

function TaskContainer() {
  return (
    <div className="w-11/12 max-w-xl bg-cyan-400 drop-shadow-xl px-3 py-2 mt-3 rounded-md">
      <TaskForm />
      <div className="flex justify-center flex-wrap mt-3 max-h-96 overflow-auto">
        <Task text="Hola Mundo" />
      </div>
    </div>
  );
}

export default TaskContainer;
