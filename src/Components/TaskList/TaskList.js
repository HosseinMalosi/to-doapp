import React from "react";

import Card from "../UI/Card";
import classes from "./tasklist.module.css";

const TaskList = (props) => {
  const onListClickHandler = (ev) => {
    ev.target.classList.toggle(`${classes.checked}`);
  };

  return (
    <Card className={classes.Box}>
      <div className={classes.listRow}>
        <ul>
          {props.items.map((item) => {
            return (
              <li
                className={`${classes.fadeIn} ${classes.ListItem}`}
                key={item.key}
                onClick={onListClickHandler}
              >
                {item.val}
                <span className={classes.closeBtn} onClick={() => props.onFilter(item.key)}>X</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`${classes.starter} ${
          props.items.length == 0 ? "" : classes.hidden
        }`}
      >
        <h2>Your list Is Empty</h2>
        <h4>Fill the Form with your daily works</h4>
      </div>
    </Card>
  );
};

export default TaskList;
