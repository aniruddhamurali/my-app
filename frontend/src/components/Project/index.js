import React, { Component } from 'react';
import {Card, Col} from 'react-bootstrap';
import './Project.css';


class Project extends Component {
    constructor(props){
		super(props);
		this.state = {};
	}

    render() {
        return (
            <Col>
                <Card className="card" bg="dark">
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
            </Col> 
        )
    }
}

export default Project;