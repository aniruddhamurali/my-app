import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import './Project.css';


class Project extends Component {
    constructor(props){
		super(props);
		this.state = {};
	}

    render() {
        return (
            <Card>
                <Card.Img src={this.props.image} /> 
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>  
        )
    }
}

export default Project;