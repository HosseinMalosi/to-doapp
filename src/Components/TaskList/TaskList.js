import Card from "../UI/Card";
import classes from "./tasklist.module.css";

const TaskList = (props) => {
  const onDeleteItemHandler = (key) => {
    props.items.filter((item) => item.key === key);
    console.log(props.items);
  };

  return (
    <Card className={classes.Box}>
      <ul>
        {props.items.map((item) => {
          return (
            <li className={classes.ListItem} key={item.key}>
              {item.val}
              <span onClick={onDeleteItemHandler}>X</span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default TaskList;
