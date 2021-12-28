import React, { Component } from 'react';
import {Badge} from 'react-bootstrap';

import './Tag.css';


class Tag extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Badge pill className="tag">
                {this.props.tag}
            </Badge>
        );
    }
}


export default Tag;