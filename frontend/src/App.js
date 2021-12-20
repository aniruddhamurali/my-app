import './App.css';
//import "typeface-lato";

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";

import Home from './components/Home';

const Styles = styled.div`
  .navbar-brand,
  .navbar-nav .nav-item .nav-link {
    color: #fff;
    &:hover {
      color: #fb7840;
    }
  }

  .navbar-toggle-icon {
    background-image: url("data:image/svg+xml;");
    color: #fff;
  }
`;

function App() {
  return (
    <Router>
      <div>
        <Styles>
          <Navbar bg="dark" expand="lg">
            <Container>
              <Navbar.Brand style={{fontFamily:"Lato"}} href="/">Aniruddha Murali</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Item>
                    <Nav.Link style={{fontFamily:"Lato"}} href="/">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link style={{fontFamily:"Lato"}} href="/about">About</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Styles>

        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;