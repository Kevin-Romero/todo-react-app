import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ text }) {
  return (
    <div className="px-3 py-2 mt-3 outline-none bg-cyan-700 w-full text-white rounded-md flex justify-between items-center cursor-pointer">
      <div className="w-full h-full text-lg text-left">{text}</div>
      <div>
        <AiOutlineCloseCircle className="w-7 h-7" />
      </div>
    </div>
  );
}

export default Task;
