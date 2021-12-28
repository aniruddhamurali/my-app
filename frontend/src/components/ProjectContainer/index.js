import React, { Component } from 'react';
import {CardGroup, Row, Col, ButtonGroup, Button} from 'react-bootstrap';
import $ from 'jquery';

import Project from '../Project';
import projects from '../../constants/projects';
import projectButtons from '../../constants/projectButtons';
import "./ProjectContainer.css"

class ProjectContainer extends Component {
    constructor(props){
		super(props);
		this.state = {
            category: "all"
        };
	}

    onSelect = (id, e) => {
        this.setState({category: id});
        for (let i = 0; i < projectButtons.length; i++) {
            $('#' + projectButtons[i]["id"]).removeClass('active');
        }

        $('#all').removeClass('active');
        $('#' + id).addClass('active');

        $(".cardgroup").addClass('animate');
        $(".cardgroup").on("animationend", this.animationEndCallback);
    }

    animationEndCallback = (e) => {
        $(".cardgroup").off("animationend", this.animationEndCallback);
        $(".cardgroup").removeClass('animate');
    }

    getProjects = () => {
        var shownProjects = [];
        if (this.state.category === "all") shownProjects = projects;
        else {
            for (let i = 0; i < projects.length; i++) {
                for (let j = 0; j < projects[i]["tags"].length; j++) {
                    if (projects[i]["tags"][j] === this.state.category) {
                        shownProjects.push(projects[i]);
                        break;
                    }
                }
            }
        }
        return shownProjects;
    }

    render() {
        var shownProjects = this.getProjects();

        return (
            <div className="projectcontainer">
                <br></br>
                <br></br>
                <h1 className="header"><strong>PROJECTS</strong></h1>
                <br></br>
                <br></br>
                <div className="buttongroupdiv">
                <ButtonGroup className="mb-2 buttongroup">
                        <Button 
                            id="all"
                            onClick={(e) => this.onSelect("all", e)} 
                            className="button active"
                        >
                            ALL
                        </Button>
                    {projectButtons.map((item, index) => (
                        <Button 
                            id={item["id"]} 
                            onClick={(e) => this.onSelect(item["id"], e)} 
                            className="button"
                        >
                            {item["text"]}
                        </Button>
                    ))}
                </ButtonGroup>
                </div>
                <br></br>
                <Row xs={1} sm={1} md={2} lg={3} className="g-4 cardgroup">
                    {shownProjects.map((item, index) => (
                        <Project
                            title={item["title"]}
                            description={item["description"]}
                            image={item["image"]}
                            carousel={item["carousel"]}
                            tags={item["tags"]}
                        />
                    ))}
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        );
    }
}

export default ProjectContainer;