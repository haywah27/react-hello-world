import React, { Component } from 'react';
import Navbar from './components/NavBar';
import ColorChange from "./components/index";

class App extends Component {
    render() {
        return(
            <>
                <div>
                    <Navbar />
                </div>
                <div>
                    <ColorChange />
                </div>
            </>
         )
     }
}

export default App;