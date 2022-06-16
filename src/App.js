import React, { useState } from "react";
import "./App.css";
import TaskInput from "./Components/TaskInput/TaskInput";
import TaskList from "./Components/TaskList/TaskList";

function App() {
  const [Tasks, setTasks] = useState([]);
  const [Filled, setFilled] = useState();

  const onGiveTaskHandler = (task) => {
    setTasks((prevVal) => {
      console.log(prevVal);
      return [task, ...prevVal];
    });
  };

  const onFilterHandler = (key) => {
    console.log(key);
    setTasks(Tasks.filter((item) => item.key !== key));
  };

  

  return (
    <main>
      <TaskInput onGiveTask={onGiveTaskHandler} />
      <TaskList
        items={Tasks}
        onFilter={onFilterHandler}
      />
    </main>
  );
}

export default App;
