import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../App.css';


class Experience extends Component {
    constructor(props){
		super(props);
		this.state = {};
	}

    render() {
        const imgStyle = {
            borderRadius: "5%",
            width: "250px",
        }

        return (
            <Container style={{color: "white"}} fluid>
                <br></br>
                <br></br>
                <h1 style={{textAlign: "center"}}>———— My Experience ————</h1>
                <br></br>
                <br></br>
                <Row>
                    <Col xs={12} md={5} style={{textAlign: "right"}}>
                        <img style={imgStyle} src="./images/Capital-One.jpg" alt=""/>
                    </Col>
                    <Col xs={12} md={5}>
                        <h3>{this.props.name}</h3>
                        <h5>{this.props.role}</h5>
                        <h6>{this.props.location}; {this.props.timeframe}</h6>
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