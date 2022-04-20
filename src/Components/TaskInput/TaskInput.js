import { useState, useRef } from "react";

import Card from "../UI/Card";
import classes from "./taskinput.module.css";

const TaskInput = (props) => {
  const [Task, setTask] = useState('');
  const TaskRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(Task);
    TaskRef.current.value = '';
  };

  const onChangeHandler = (event) => {
    let TaskVal = event.target.value;
    setTask(TaskVal);
  };

  return (
    <Card className={classes.Box}>
      <form onSubmit={onSubmitHandler}>
        <input type="text" ref={TaskRef} onChange={onChangeHandler}/>
        <div className={classes.BtnRow}>
          <button type="submit">Add Task</button>
          <button>Remove All</button>
        </div>
      </form>
    </Card>
  );
};

export default TaskInput;
