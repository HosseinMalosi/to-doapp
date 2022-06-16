import { useState, useRef } from "react";

import Card from "../UI/Card";
import classes from "./taskinput.module.css";

const TaskInput = (props) => {
  const [Task, setTask] = useState([]);
  const TaskRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (Task.val.trim().length > 0) {
      props.onGiveTask(Task);
    } else {
      alert("fill form");
    }
    TaskRef.current.value = "";
    setTask('')
  };

  const onChangeHandler = (event) => {
    let TaskVal = event.target.value;
    setTask({val: TaskVal , key: Math.random()});
  };

  return (
    <Card className={classes.Box}>
      <form onSubmit={onSubmitHandler}>
        <input type="text" ref={TaskRef} onChange={onChangeHandler} />
        <div className={classes.BtnRow}>
          <button type="submit">Add Task</button>
          <button type="reset">Remove All</button>
        </div>
      </form>
    </Card>
  );
};

export default TaskInput;
