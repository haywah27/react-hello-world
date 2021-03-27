import React from "react";
import Task from "./Task";

const Tasks = (props) => {
  return (
    <div className="task-remain">
      <h1> To be completed: </h1>
      <ul>
        {props.tasks.map((task, index) => {
          return (
            <Task
              remove={() => props.remove(index)}
              task={task}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Tasks;
