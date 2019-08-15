import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import MButton from '@material-ui/core/Button';
import AdminPage from './AdminPage';

import API from "../utils/API";

import './LoginPage.css';

class LoginPage extends Component {

    state = {
        username: "",
        password: "",
        message: "",
        errorVisible: false,
        isAuthed: false
    };

   

    handleFormSubmit = event => {
        event.preventDefault();
        const newUser = {
            username: this.state.username,
            password: this.state.password
        };
        console.log(newUser);
        API.createUser(newUser)
        .then(res => console.log("success"))
        .catch(err => {
            const status = parseInt(err.response.status);

            switch(status) {
                case 422: {
                    console.log("duplicate");
                    break;
                }
                default: {
                    break;
                }
            }
        });

      };

      handleLogin = event => {
          event.preventDefault();
          const loginUser = {
            username: this.state.username,
            password: this.state.password
        };

        API.loginUser(loginUser)
        .then(res => {
            console.log(res.data);
            if (res.data.isMatch) {
              this.setState({
                  username: loginUser.username,
                  isAuthed: res.data.isMatch
              });
            }
        })
        .catch(err => console.log(err));
      }

      handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
    
      }
      

    render() {
        
        if (!this.state.isAuthed) {
            return(
                <Container className="loginContainer">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>UserName</Form.Label>
                            <Form.Control required type="text" placeholder="Enter username" value={this.state.username} name="username" onChange={this.handleChange}/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else. Password encrypted using the Bycrypt hash
                            </Form.Text>
                        </Form.Group>
    
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button id="loginSubmit" variant="primary" type="submit" onClick={this.handleLogin}>
                            Login
                        </Button>
                        <Button id="createSubmit" variant="outline-success" type="submit" onClick={this.handleFormSubmit}>
                            Create Account
                        </Button>
                    </Form>
                    <MButton id="homeBtn"href="/">Home</MButton>
                </Container>
            );
        } else {
            return(
                <AdminPage 
                    username={this.state.username}
                />
            );
        }
        
    };
}

export default LoginPage;