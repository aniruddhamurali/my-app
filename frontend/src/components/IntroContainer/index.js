import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "./IntroContainer.css"

class IntroContainer extends Component {
    constructor(props){
		super(props);
		this.state = {};
	}

    render() {
        return (
            <Container className="intro" fluid>
                <img className="introImage" src="./images/aniruddha.JPG" alt=""/>
                <br></br>
                <Row>
                    <Col className="introText" xs={12} md={5}>
                        <h2>Hey!</h2>
                        <h5>
                            Welcome to my website! I'm currently a computer science student at 
                            Georgia Tech with specializations in AI and People. My mission is to 
                            create technologies that have real-world impact. Here's my background 
                            and experience that got me to where I am today:
                        </h5>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default IntroContainer;