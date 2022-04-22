import React, { useState } from "react";
import "./App.css";
import TaskInput from "./Components/TaskInput/TaskInput";
import TaskList from "./Components/TaskList/TaskList";

function App() {
  const [Tasks, setTasks] = useState([]);

  const onGiveTaskHandler = (task) => {
    setTasks((prevVal) => {
      console.log(prevVal);
      return [task , ...prevVal];
    });
  };

  return (
    <main>
      <TaskInput onGiveTask={onGiveTaskHandler} />
      <TaskList items={Tasks}/> 
    </main>
  );
}

export default App;
