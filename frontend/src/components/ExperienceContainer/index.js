import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Experience from '../Experience';
import experiences from '../../constants/experiences';
import "./ExperienceContainer.css";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class IntroContainer extends Component {
    constructor(props){
		super(props);
		this.state = {};
	}

    render() {
        /*
        return (
            <Container className="experiences" fluid>
                <br></br>
                <br></br>
                <h1 className="header"><strong>EXPERIENCE</strong></h1>
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
        )*/
        return (
            <Container id="Experience" className="experiences" fluid>
                <br></br>
                <br></br>
                <br></br>
                <h1 className="header"><strong>EXPERIENCE</strong></h1>
                <br></br>
                <br></br>
                <VerticalTimeline>
                    {experiences.map((item, index) => (
                        <Experience 
                            name={item["name"]} 
                            role={item["role"]} 
                            location={item["location"]}
                            timeframe={item["timeframe"]}
                            image={item["image"]}
                            icon={item["icon"]}
                            tasks={item["tasks"]}
                        />
                    ))}
                </VerticalTimeline>
                <br></br>
                <br></br>
            </Container>
        )
    }
}

export default IntroContainer;