import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import Container from '@material-ui/core/Container'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button';
import logo from './apple.svg';
import './App.css';


class App extends Component {
  state = {
      data: null
    };


  componentDidMount() {
    console.log("Mounted!");
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="apple" />
          <p>Enter Your Class Room Number</p>
          <Input
          placeholder="Room Number"
          >
          </Input>
          <Button 
          id="submitRoomBtn"
          variant="contained">
          Submit
          </Button>
        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;