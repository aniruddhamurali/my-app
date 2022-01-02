import React, { Component } from 'react';
import {Modal, Button, Carousel} from 'react-bootstrap';

import "./ExperienceModal.css"

class ExperienceModal extends Component {
    constructor(props){
		super(props);
		this.state = {};
	}

    handleClose = () => {
        this.props.toggleModal();
    }

    render() {
        var slides;
        if (this.props.carousel.length === 1) {
            slides = (
                <img
                    className="d-block w-100"
                    src={this.props.carousel[0]}
                    alt="First slide"
                />
            ); 
        } else {
            slides = (
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
            );
        }
        
        return (
            <Modal
                show={this.props.show}
                onHide={this.handleClose}
                backdrop="static"
                keyboard={true}
                dialogClassName="modal-50w"
            >
                {slides}

                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.about}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ExperienceModal;