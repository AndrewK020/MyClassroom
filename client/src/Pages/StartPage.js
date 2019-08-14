import React, { Component } from "react";
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button';


import logo from '../apple.svg';
import './StartPage.css';

class StartPage extends Component {

    handleFormSubmit = event => {
        this.props.history.push('/login');
      };
    

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
            <Button id="loginBtn" onClick={this.handleFormSubmit} >Login</Button>
          </div>
        );
      }

}


export default StartPage;