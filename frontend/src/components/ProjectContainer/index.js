import React, { Component } from 'react';
import {CardGroup, Row, Col} from 'react-bootstrap';

import Project from '../Project';
import projects from '../../constants/projects';
import "./ProjectContainer.css"

class ProjectContainer extends Component {
    constructor(props){
		super(props);
		this.state = {};
	}

    render() {
        return (
            <div className="projectcontainer">
                <br></br>
                <br></br>
                <h1 className="header"><strong>———— Projects ————</strong></h1>
                <br></br>
                <br></br>
                <Row sm={1} md={2} lg={3} className="g-3 cardgroup">
                    {projects.map((item, index) => (
                        <Project
                            title={item["title"]}
                            description={item["description"]}
                            image={item["image"]}
                        />
                    ))}
                </Row>
            </div>
        );
    }
}

export default ProjectContainer;