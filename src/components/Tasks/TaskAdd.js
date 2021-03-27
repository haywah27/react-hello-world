import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class TaskAdd extends Component {
  render() {
    return (
      <div className="task-add">
        <h1>Add Task:</h1>

        <input
          type="text"
          onChange={this.props.changed}
          placeholder="Enter Task here"
        ></input>

        <Button onClick={this.props.clicked}>Add</Button>
      </div>
    );
  }
}

export default TaskAdd;
