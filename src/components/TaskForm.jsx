import React, { useState } from "react";

function TaskForm(props) {
  const [input, setInput] = useState("");

  const change = (e) => {
    setInput(e.target.value);
  };

  const send = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      text: input,
    };

    props.onSubmit(newTask);
    document.getElementById("form").reset();
  };
  return (
    <form id="form" onSubmit={send}>
      <input
        type="text"
        name="taskInput"
        className="px-3 py-2 outline-none text-cyan-700 w-4/5 rounded-l-md"
        placeholder="What is your task?"
        onChange={change}
      />
      <button className="bg-cyan-700 text-white px-3 py-2 w-1/5 rounded-r-md">
        Add
      </button>
    </form>
  );
}

export default TaskForm;
