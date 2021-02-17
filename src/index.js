import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from "moment";
import Taskbar from "./Components/Taskbar/Taskbar.jsx";
import Desktop from "./Components/Desktop/Desktop.jsx";
import CrtEffect from "./Components/Effects/CrtEffect.jsx";
import "./styles/styles.scss";

class App extends Component {

  state = {
    time: moment().format("h:mm A")
  }

  componentDidMount() {
    // Get time
    setInterval(
      () => this.setState({ time: moment().format("h:mm A") }),
      1000
    )
  }

  

  render() {
    return (
      <React.StrictMode>
        <Taskbar time={this.state.time}/>
        <Desktop />

        <CrtEffect />
      </React.StrictMode>
    )
  }
  
}


ReactDOM.render(
  <App className="App"/>,
  document.getElementById('root')
);
