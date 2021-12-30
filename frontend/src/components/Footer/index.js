import React, { Component } from 'react';
import {Container, Row, Col, Stack} from 'react-bootstrap';
import "./Footer.css"

class Footer extends Component {
    constructor(props){
		super(props);
		this.state = {};
	}

    render() {
        return (
            <footer>
                <Container>
                    <Row  className="g-4 footerRow justify-content-md-center">
                        <Col xs={12} sm={12} md={3} lg={3} className="col left">
                            <Stack gap={1}>
                                <div className="category">Aniruddha Murali</div>
                            </Stack>
                        </Col>
                        <Col xs={12} sm={12} md={2} lg={2} className="col left">
                            <Stack gap={1}>
                                <div className="category">ABOUT</div>
                                <div className="footer-link"><a href="#Experience">Experience</a></div>
                                <div className="footer-link"><a href="#Projects">Projects</a></div>
                            </Stack>
                        </Col>
                        <Col xs={12} sm={12} md={2} lg={2} className="col left">
                            <Stack gap={1}>
                                <div className="category">PROJECTS</div>
                                <div className="footer-link">CovidForecasts</div>
                                <div className="footer-link">COVID-Tracker</div>
                            </Stack>
                        </Col>
                        <Col xs={12} sm={12} md={2} lg={2} className="col left">
                            <Stack gap={1}>
                                <div className="category">OTHER</div>
                                <div className="footer-link">Blog</div>
                                <div className="footer-link">Resume</div>
                            </Stack>
                        </Col>
                        <Col xs={12} sm={12} md={3} lg={3} className="col">
                            <div className="category">CONTACT</div>
                            <div className="d-flex flex-wrap justify-content-center icons">
                                <a href="https://www.instagram.com/aniruddhamurali/" target="_blank"><i class="fab fa-instagram-square fa-2x"></i></a>
                                <a href="https://twitter.com/AniruddhaMurali" target="_blank"><i class="fab fa-twitter-square fa-2x" ></i></a>
                                <a href="https://www.linkedin.com/in/aniruddhamurali/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
                                <a href="mailto:aniruddha.murali@gmail.com?"><i class="fas fa-envelope fa-2x"></i></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;