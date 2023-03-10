import "./App.css";
import Tarea from "./components/Tarea";
import TaskContainer from "./components/TaskContainer";

function App() {
  return (
    <div className="App">
      <div className="w-screen h-screen bg-cyan-200 flex justify-center items-center uppercase text-center flex-col">
        <h1 className="font-bold text-5xl text-cyan-700">todo react app</h1>
        <TaskContainer></TaskContainer>
      </div>
    </div>
  );
}

export default App;
