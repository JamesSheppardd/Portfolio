import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from "moment";
import Taskbar from "./Components/Taskbar/Taskbar.jsx";
import Desktop from "./Components/Desktop/Desktop.jsx";
import CrtEffect from "./Components/Effects/CrtEffect.jsx";
import Welcome from "./Components/Welcome/Welcome.jsx";


class App extends Component {

  constructor(props){
    super(props);
    this.setWelcome = this.setWelcome.bind(this);
    this.setChangelog = this.setChangelog.bind(this);
  }
  
  state = {
    time: moment().format("h:mm A"),
    welcome: true,
    changelog: false
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
  setChangelog() {
    this.setState({ changelog: !this.state.changelog });
  }

  render() {
    return (
      <React.StrictMode>
        <div className="desktop-container" style={{width: "100%", height: "94.3vh"}} >
          <Desktop changelog={this.state} openChangelog={this.setChangelog}/>
        </div>
        {this.state.welcome && <Welcome close={this.setWelcome} style={{width: "100%", height: "94.3vh"}} openChangelog={this.setChangelog}></Welcome>}
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
