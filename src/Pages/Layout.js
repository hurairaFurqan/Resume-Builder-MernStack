import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Layout(props) {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm rounded mb-2">
      <Container>
        <Navbar.Brand href="#home">Resume Builder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-end"
        >
          <Nav className="mt-auto">
            <Nav.Link to={"/"} as={NavLink}>
              Resume
            </Nav.Link>
            <Nav.Link to={"/sop"} as={NavLink}>
              SOP
            </Nav.Link>
            <Nav.Link to={"/coverLetter"} as={NavLink}>
              CoverLetter
            </Nav.Link>
            <Nav.Link
              to={"/grammarCheck"}
              as={NavLink}
              className='rounded'
              style={{ backgroundColor: "#13b493", color: "white" }}
            >
              Grammar Check
            </Nav.Link>
            <Nav.Link
              to={"/download"}
              as={NavLink}
              className='ms-2'
              style={{ backgroundColor: "#62A8EA", color: "white" }}
            >
              Download
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Layout;
