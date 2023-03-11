import React from "react";

function TaskForm({}) {
  return (
    <form>
      <input
        type="text"
        name="taskInput"
        className="px-3 py-2 outline-none text-cyan-700 w-4/5 rounded-l-md"
        placeholder="What is your task?"
      />
      <button className="bg-cyan-700 text-white px-3 py-2 w-1/5 rounded-r-md">
        Add
      </button>
    </form>
  );
}

export default TaskForm;
