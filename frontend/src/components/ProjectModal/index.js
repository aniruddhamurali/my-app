import React, { Component } from 'react';
import {Modal, Button, Carousel} from 'react-bootstrap';
import $ from 'jquery';

import "./ProjectModal.css"

class ProjectModal extends Component {
    constructor(props){
		super(props);
		this.state = {};
	}

    handleClose = () => {
        this.props.toggleModal();
        //$(".hovercard").addClass("card").removeClass("hovercard");
    }

    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.handleClose}
                backdrop="static"
                keyboard={true}
                dialogClassName="modal-50w"
            >
                <Carousel>
                    {this.props.carousel.map((item, index) => (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={item}
                                alt="First slide"
                            />
                      </Carousel.Item>
                    ))}
                </Carousel>

                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ProjectModal;