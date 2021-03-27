import React, { Component } from 'react';
import Navbar from './components/NavBar';
import ColorChange from "./components/ColorChange";
import TaskAdd from './components/Tasks/TaskAdd';

class App extends Component {
    render() {
        return(
            <>
                <div>
                    <Navbar />
                    <ColorChange />
                    <TaskAdd />
                </div>
            </>
         )
     }
};

export default App;