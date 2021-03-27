import React, { Component } from "react";

class TaskAdd extends Component {
  render() {
    return (
      <div>
        <h1>Add your task here</h1>

        <input type="text" placeholder="Enter Task here" />
        <button> Add </button>
      </div>
    );
  }
}
export default TaskAdd;
