import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../App.css';


class Experience extends Component {
    constructor(props){
		super(props);
		this.state = {};
	}

    render() {
        return (
            <Container style={{color: "white"}} fluid>
                <br></br>
                <br></br>
                <h1 style={{textAlign: "center"}}>———— My Experience ————</h1>
                <br></br>
                <br></br>
                <Row>
                    <Col xs={12} md={5} style={{textAlign: "right"}}>
                        Image
                    </Col>
                    <Col xs={12} md={7}>
                        <h3>{this.props.name}</h3>
                        <h5>{this.props.role}</h5>
                        <h6>{this.props.location}; {this.props.timeframe}</h6>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Experience;