import React, { Component } from 'react';
import {Card, Col} from 'react-bootstrap';

import './Project.css';
import ProjectModal from '../ProjectModal';
import Tag from '../Tag';

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
                        {this.props.tags.map((item, index) => (
                            <Tag tag={item}></Tag>
                        ))}
                    </Card.Footer>
                </Card>
                <ProjectModal 
                    show={this.state.showModal} 
                    toggleModal={this.toggleModal}
                    carousel={this.props.carousel}
                    title={this.props.title}
                    description={this.props.description}
                    about={this.props.about}
                >
                </ProjectModal> 
            </Col>
        );
    }
}

export default Project;