import React, { Component } from "react";
import Navbar from "./components/NavBar";
import ColorChange from "./components/ColorChange";
import TaskAdd from "./components/Tasks/TaskAdd";
import Tasks from "./components/Tasks/Tasks";

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

  // Removes tasks from the tasks array
  removeTaskHandler = (index) => {
    const beforeTasks = this.state.tasksRemain.slice(0, index);
    const afterTasks = this.state.tasksRemain.slice(index + 1);
    const tasks = [...beforeTasks, ...afterTasks];
    console.log(tasks);
    this.setState({ tasksRemain: tasks });
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

         
            <Tasks
              tasks={this.state.tasksRemain}
              remove={this.removeTaskHandler}
              darkMode={this.state.darkMode}
            />
          
        </div>
      </>
    );
  }
}

export default App;
