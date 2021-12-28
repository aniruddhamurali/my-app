import React, { Component } from 'react';
import {Card, Col, Button, Collapse} from 'react-bootstrap';
import $ from 'jquery';

import './Project.css';
import ProjectModal from '../ProjectModal';

class Project extends Component {
    constructor(props){
		super(props);
		this.state = {
            hover: false,
            showModal: false
        };
	}

    switchHover = (bool) => {
        this.setState({hover: bool});
    }

    toggleModal = () => {
        this.setState({showModal: !this.state.showModal})
    }

    render() {
        return (
            <Col>
                <Card 
                    className="card h-100" 
                    bg="dark"
                    onClick={() => this.toggleModal()}
                >
                    <Card.Img className="card-img" src={this.props.image} /> 
                    <Card.Body>
                    <Card.Title className="title">{this.props.title}</Card.Title>
                    <Card.Text className="desc">
                        {this.props.description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <ProjectModal 
                    show={this.state.showModal} 
                    toggleModal={this.toggleModal}
                    carousel={this.props.carousel}
                    title={this.props.title}
                    description={this.props.description}
                >
                </ProjectModal> 
            </Col>
        );

        /*
        if (!this.state.hover) {
            return (
                <Col onMouseEnter={() => this.switchHover(true)}>
                    <Card 
                        className="card h-100" 
                        bg="dark"
                    >
                        <Card.Img className="card-img" src={this.props.image} /> 
                        <Card.Body>
                        <Card.Title className="title">{this.props.title}</Card.Title>
                        <Card.Text className="desc">
                            {this.props.description}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <ProjectModal 
                        show={this.state.showModal} 
                        toggleModal={this.toggleModal}
                        carousel={this.props.carousel}
                        title={this.props.title}
                        description={this.props.description}
                    >
                    </ProjectModal> 
                </Col>
            );
        } else {
            return (
                <Col onMouseLeave={() => this.switchHover(false)} style={{height: this.state.cardHeight}}>
                    <Collapse in={true} dimension="width">
                        <Card 
                            className="hovercard h-100" 
                            bg="dark"
                        >
                            <div className="hovertitlecontainer">
                                <Card.Title className="hovertitle">{this.props.title}</Card.Title>
                            </div>
                            <Button onClick={() => this.toggleModal()} className="hoverbutton">Learn more</Button>
                        </Card>
                    </Collapse>
                    <ProjectModal
                        show={this.state.showModal} 
                        toggleModal={this.toggleModal}
                        carousel={this.props.carousel}
                        title={this.props.title}
                        description={this.props.description}
                    >
                    </ProjectModal> 
                </Col>
            ); 
        }*/

    }
}

export default Project;