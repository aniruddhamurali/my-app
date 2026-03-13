import React, { Component } from 'react';
import {Card, Col} from 'react-bootstrap';

import './Project.css';
import ProjectModal from '../ProjectModal';

class Project extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        };
    }

    toggleModal = () => {
        this.setState({showModal: !this.state.showModal})
    }

    render() {
        return (
            <Col>
                <Card
                    className="project-card h-100"
                    bg="dark"
                    onClick={() => this.toggleModal()}
                >
                    <Card.Img className="project-card-img" src={this.props.image} />
                    <Card.Body className="project-card-body">
                        <Card.Title className="project-card-title">{this.props.title}</Card.Title>
                        <div className="project-card-tags">
                            {this.props.tags.map((tag, index) => (
                                <span key={index} className="project-card-tag">{tag}</span>
                            ))}
                        </div>
                        <Card.Text className="project-card-desc">
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <ProjectModal
                    show={this.state.showModal}
                    toggleModal={this.toggleModal}
                    carousel={this.props.carousel}
                    title={this.props.title}
                    description={this.props.description}
                    about={this.props.about}
                />
            </Col>
        );
    }
}

export default Project;
