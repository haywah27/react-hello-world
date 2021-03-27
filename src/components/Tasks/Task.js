import React from "react";

const Task = (props) => {
  return (
    <li>
      <p>{props.task}</p>

      <button onClick={props.remove}>Completed</button>
    </li>
  );
};

export default Task;
