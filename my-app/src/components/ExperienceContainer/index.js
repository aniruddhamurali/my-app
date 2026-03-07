import React, { Component } from 'react';
import {Container} from 'react-bootstrap';

import Experience from '../Experience';
import experiences from '../../constants/experiences';
import "./ExperienceContainer.css";

class ExperienceContainer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container id="Experience" className="experiences" fluid>
                <br></br>
                <br></br>
                <br></br>
                <h1 className="header"><strong>EXPERIENCE</strong></h1>
                <br></br>
                <br></br>
                <div className="exp-list">
                    {experiences.map((item, index) => (
                        <Experience
                            key={index}
                            name={item["name"]}
                            role={item["role"]}
                            location={item["location"]}
                            timeframe={item["timeframe"]}
                            image={item["image"]}
                            about={item["about"]}
                            carousel={item["carousel"]}
                        />
                    ))}
                </div>
                <br></br>
                <br></br>
            </Container>
        )
    }
}

export default ExperienceContainer;
