import React from "react";

function TaskForm() {
  return (
    <form>
      <input
        type="text"
        name="taskInput"
        className=""
        placeholder="What is your task?"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
