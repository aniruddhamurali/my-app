import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Experience.css';


class Experience extends Component {
    constructor(props){
		super(props);
		this.state = {};
	}

    render() {
        return (
            <Container className="container" fluid>
                <br></br>
                <br></br>
                <h1 className="header">———— My Experience ————</h1>
                <br></br>
                <br></br>
                <Row>
                    <Col xs={12} md={5} className="imageCol">
                        <img className="image" src={this.props.image} alt=""/>
                    </Col>
                    <Col xs={12} md={5}>
                        <h3>{this.props.name}</h3>
                        <h5>{this.props.role}</h5>
                        <h6>{this.props.location}; {this.props.timeframe}</h6>
                        <br></br>
                        {this.props.tasks.map((item, index) => (
                            <li>{item}</li>
                        ))}
                    </Col>
                </Row>
            </Container>    
        )
    }
}

export default Experience;