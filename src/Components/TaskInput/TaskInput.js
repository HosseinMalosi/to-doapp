import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import classes from "./taskinput.module.css";

const TaskInput = (props) => {
  const [Task, setTask] = useState([{ val: "" }]);
  const TaskRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (TaskRef.current.value.length > 0) {
      props.onGiveTask(Task);
    } else {
      alert("fill form");
    }
    TaskRef.current.value = "";
    setTask("");
  };

  const onChangeHandler = (event) => {
    let TaskVal = event.target.value;
    setTask({ val: TaskVal, key: Math.random() });
  };

  const onClickHandler = (ev) => {
    ev.target.classList.add(`${classes.bounce}`);
    setTimeout(() => {
      ev.target.classList.remove(`${classes.bounce}`);
    }, 1000);
  };

  return (
    <Card className={classes.Box}>
      <form onSubmit={onSubmitHandler}>
        <input type="text" ref={TaskRef} onChange={onChangeHandler} />
        <button
          className={classes.AddBtn}
          type="submit"
          onClick={onClickHandler}
        >
          +
        </button>
      </form>
    </Card>
  );
};

export default TaskInput;
