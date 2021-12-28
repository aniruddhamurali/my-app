import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Experience.css';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


class Experience extends Component {
    constructor(props){
		super(props);
		this.state = {};
	}

    render() {
        /*
        return (
            <Container className="container" fluid>
                <Row>
                    <Col xs={12} md={4} className="imageCol">
                        <img className="image" src={this.props.image} alt=""/>
                    </Col>
                    <Col xs={12} md={7}>
                        <h3 className="company"><strong>{this.props.name}</strong></h3>
                        <h5><strong>{this.props.role}</strong></h5>
                        <h6>{this.props.location}; {this.props.timeframe}</h6>
                        <br></br>
                        <ul>
                            {this.props.tasks.map((item, index) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>
            </Container>    
        )*/

        return (
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{backgroundColor: "rgb(248, 240, 227)"}}
                contentArrowStyle={{ borderRight: '7px solid rgb(248, 240, 227)' }}
                date={this.props.timeframe}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', textAlign: 'center' }}
                icon={<FontAwesomeIcon size="lg" icon={faBriefcase}></FontAwesomeIcon>}
            >
                <Row className="experienceRow">
                    <Col xs={12} md={4} className="imageCol">
                        <img className="image" src={this.props.image} alt=""/>
                    </Col>
                    <Col xs={12} md={7}>
                        <h3 className="company"><strong>{this.props.name}</strong></h3>
                        <h5 className="role">{this.props.role}</h5>
                        <h6>{this.props.location}</h6>
                        <br></br>
                    </Col>
                </Row>

            </VerticalTimelineElement>
        )

    }
}

export default Experience;