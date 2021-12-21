import React, { Component } from 'react';
import {CardGroup} from 'react-bootstrap';

import Project from '../Project';
import projects from '../../constants/projects';
import "./ProjectContainer.css"

class ProjectContainer extends Component {
    constructor(props){
		super(props);
		this.state = {};
	}

    render() {
        console.log(projects[0]["image"]);
        return (
            <CardGroup>
                {projects.map((item, index) => (
                    <Project
                        title={item["title"]}
                        description={item["description"]}
                        image={item["image"]}
                    />
                ))}
            </CardGroup>
        );
    }
}

export default ProjectContainer;