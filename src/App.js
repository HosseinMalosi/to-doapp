import React, { useState } from "react";
import classes from "./App.module.css";
import TaskInput from "./Components/TaskInput/TaskInput";
import TaskList from "./Components/TaskList/TaskList";
import Card from "./Components/UI/Card";

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
      <Card className={classes.Card}>
      <TaskInput onGiveTask={onGiveTaskHandler} />
      <TaskList items={Tasks} onFilter={onFilterHandler} />
      </Card>
    </main>
  );
}

export default App;
