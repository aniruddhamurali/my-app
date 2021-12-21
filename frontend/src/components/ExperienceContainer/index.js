import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Experience from '../Experience';
import experiences from '../../constants/experiences';
import "./ExperienceContainer.css"

class IntroContainer extends Component {
    constructor(props){
		super(props);
		this.state = {};
	}

    render() {
        return (
            <Container className="experiences" fluid>
                <br></br>
                <br></br>
                <h1 className="header"><strong>———— Experience ————</strong></h1>
                <br></br>
                <br></br>
                {experiences.map((item, index) => (
                    <Experience 
                        name={item["name"]} 
                        role={item["role"]} 
                        location={item["location"]}
                        timeframe={item["timeframe"]}
                        image={item["image"]}
                        tasks={item["tasks"]}
                    />
                ))}
            </Container>
        )
    }
}

export default IntroContainer;