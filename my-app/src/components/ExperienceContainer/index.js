import React, { Component } from 'react';
import {Container} from 'react-bootstrap';

import Experience from '../Experience';
import experiences from '../../constants/experiences';
import "./ExperienceContainer.css";

const DEFAULT_SHOWN = 7;

class ExperienceContainer extends Component {
    constructor(props){
        super(props);
        this.state = { showAll: false };
    }

    render() {
        const { showAll } = this.state;
        const shown = showAll ? experiences : experiences.slice(0, DEFAULT_SHOWN);

        return (
            <Container id="Experience" className="experiences" fluid>
                <br></br>
                <br></br>
                <br></br>
                <h1 className="header"><strong>EXPERIENCE</strong></h1>
                <br></br>
                <br></br>
                <div className="exp-list">
                    {shown.map((item, index) => (
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
                {experiences.length > DEFAULT_SHOWN && (
                    <div className="exp-toggle-wrap">
                        <button className="exp-toggle-btn" onClick={() => this.setState({ showAll: !showAll })}>
                            {showAll ? 'Show less ▲' : `Show more (${experiences.length - DEFAULT_SHOWN} more) ▼`}
                        </button>
                    </div>
                )}
                <br></br>
                <br></br>
            </Container>
        )
    }
}

export default ExperienceContainer;
