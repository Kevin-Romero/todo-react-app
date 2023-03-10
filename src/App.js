import TaskContainer from "./components/TaskContainer";

function App() {
  return (
    <div className="App">
      <div className="w-screen h-screen bg-cyan-200 flex justify-center items-center text-center flex-col">
        <h1 className="font-bold text-5xl uppercase text-cyan-700">
          todo react app
        </h1>
        <TaskContainer></TaskContainer>
      </div>
    </div>
  );
}

export default App;
