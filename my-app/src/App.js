import './App.css';

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";

import Home from './components/Home';
import Footer from './components/Footer';


const Styles = styled.div`
  .navbar-brand,
  .navbar-nav .nav-item .nav-link {
    color: #fff;
    &:hover {
      /*color: #fb7840;*/
      color: #30B2FF;
    }
  }

  .navbar-toggle-icon {
    background-image: url("data:image/svg+xml;");
    color: #fff;
  }
`;

function App() {
  const [activeLink, setActiveLink] = useState(null);

  const navTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    window.history.pushState({}, '', '/' + id);
    setActiveLink(id);
  };

  return (
    <Router>
      <div>
        <Styles>
          <Navbar bg="dark" expand="lg">
            <Container>
              <Navbar.Brand href="/">Aniruddha Murali</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Item>
                    <Nav.Link active={activeLink === 'Experience'} onClick={(e) => { e.preventDefault(); navTo('Experience'); }}>Experience</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link active={activeLink === 'Projects'} onClick={(e) => { e.preventDefault(); navTo('Projects'); }}>Projects</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Styles>

        
        <Routes>
          <Route path="/*" element={<Home/>} />
        </Routes>
        

        <Footer></Footer>
        {/* <Chat></Chat> */}
      </div>
    </Router>
  );
}

export default App;
