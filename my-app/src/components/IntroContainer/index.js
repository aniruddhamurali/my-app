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
                <img className="introImage" src={process.env.PUBLIC_URL + "/images/aniruddha2.jpg"} alt=""/>
                <br></br>
                <Row>
                    <Col className="introText" xs={12} md={5}>
                        <h2 className="introWelcome">Welcome to my website!</h2>
                        <h5>
                            I'm Aniruddha, a software engineer based in San Francisco who is experienced in delivering scalable backend systems and intelligent product features 
                            and is passionate about building software that combines engineering excellence with measurable business impact. I'm interested in various areas
                            such as AI/ML, full-stack development, and databases.

                        </h5>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default IntroContainer;