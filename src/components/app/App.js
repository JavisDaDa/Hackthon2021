import React, {Component} from 'react';

import Main from "./main";
import {ToastContainer} from "react-toastify";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Main/>
                <ToastContainer/>
            </div>
        );
    }

}

export default App;