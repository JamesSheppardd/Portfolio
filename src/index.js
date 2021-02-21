import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from "moment";
import Taskbar from "./Components/Taskbar/Taskbar.jsx";
import Desktop from "./Components/Desktop/Desktop.jsx";
import CrtEffect from "./Components/Effects/CrtEffect.jsx";
import Welcome from "./Components/Welcome/Welcome.jsx";
import "./styles/styles.scss";

class App extends Component {

  constructor(props){
    super(props);
    this.setWelcome = this.setWelcome.bind(this);
  }
  
  state = {
    time: moment().format("h:mm A"),
    welcome: true
  }
  
  

  componentDidMount() {
    // Get time
    setInterval(
      () => this.setState({ time: moment().format("h:mm A") }),
      1000
    )
  }

  setWelcome() {
    this.setState({ welcome: false });
  }

  render() {
    return (
      <React.StrictMode>
        <div className="desktop-container" style={{width: "100%", height: "94.3vh"}} >
          <Desktop />
        </div>
        {this.state.welcome && <Welcome close={this.setWelcome} style={{width: "100%", height: "94.3vh"}}></Welcome>}
        <Taskbar time={this.state.time}/>
        <CrtEffect />
      </React.StrictMode>
    )
  }
  
}


ReactDOM.render(
  <App className="App"/>,
  document.getElementById('root')
);
