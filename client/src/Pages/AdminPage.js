import React, { Component } from "react";
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import API from "../utils/API"

class AdminPage extends Component {

    state = {
        username: this.props
    };

    componentDidMount() {
        API.getUserInfo(this.state.username).then(res =>{
            console.log("from admin: ", res);
            API.getQuizInfo(res.data[0]).then(res => {
                console.log("res is quz", res[0].data);
                this.setState({
                    quizes: res[0].data
                })
            });
        })
    };



    render() {
        const quizes = setQuizes(this.state);
        return(
            <Container>
            {quizes}
             
            </Container>
        );
    }
}

function setQuizes(props) {
    console.log(props)
    const quizes = props.quizes;
   
    if(quizes) {
        return quizes.map((quiz, index) => {
            console.log(quiz);
            return <div
                key={index}>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{quiz.topic}</Card.Title>
                    <Card.Text>
                    Questions
                    </Card.Text>
                </Card.Body>
                </Card> 
            </div>
        });
    } else {
        return <div></div>
    }

}

export default AdminPage;