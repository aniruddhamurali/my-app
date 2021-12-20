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
                <Row>
                    <Col xs={12} md={4} className="imageCol">
                        <img className="image" src={this.props.image} alt=""/>
                    </Col>
                    <Col xs={12} md={6}>
                        <h3 className="company"><strong>{this.props.name}</strong></h3>
                        <h5><strong>{this.props.role}</strong></h5>
                        <h6>{this.props.location}; {this.props.timeframe}</h6>
                        <br></br>
                        {this.props.tasks.map((item, index) => (
                            <li>{item}</li>
                        ))}
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>
            </Container>    
        )
    }
}

export default Experience;