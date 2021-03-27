import React, { Component } from "react";
import Navbar from "./components/NavBar";
import ColorChange from "./components/ColorChange";
import TaskAdd from "./components/Tasks/TaskAdd";


class App extends Component {
  // state component
  state = {
    tasksRemain: ["Walk Doggo", "Shopping"],
    addTask: "",
    darkMode: false,
  };

  // Assigns Value in the Input field
  onChangeHandler = (event) => {
    this.setState({
      addTask: event.target.value,
    });
  };

  // Adds Task to the array
  addTaskHandler = () => {
    this.setState({
      tasksRemain: [...this.state.tasksRemain, this.state.addTask],
      addTask: "",
    });
  };


  render() {
    return (
      <>
        <div>
          <Navbar />
          <ColorChange />
          <TaskAdd
            changed={this.onChangeHandler}
            clicked={this.addTaskHandler}
            remove={this.removeTaskHandler}
          />
        </div>
      </>
    );
  }
}

export default App;
