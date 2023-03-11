import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
/**
 * description of variables and functions / descripción de variables y funciones
 * text - is the text inserted in the form / es el texto insertado en el formulario.
 * isCompleted - is a boolean prop indicating whether the task has bee completed / es una prop booleana que nos indica si una tarea fue completada.
 * completed - is a function that changes the status of the task (completed or not completed) / es una función que cambia el estado de la tarea (completada o no completada).
 * deleteTask - is a function that removes the pressed task / es una function que elimina la tarea pulsada.
 */
function Task({ id, text, isCompleted, completed, deleteTask }) {
  return (
    <div
      className={
        isCompleted
          ? "px-3 py-2 mt-3 outline-none w-full text-white rounded-md flex justify-between items-center cursor-pointer line-through bg-slate-500 opacity-70"
          : "px-3 py-2 mt-3 outline-none bg-cyan-700 w-full text-white rounded-md flex justify-between items-center cursor-pointer"
      }
    >
      <div
        className="w-full h-full text-lg text-left"
        onClick={() => completed(id, isCompleted)}
      >
        {text}
      </div>
      <div onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="w-7 h-7 opacity-70 hover:opacity-100" />
      </div>
    </div>
  );
}

export default Task;
