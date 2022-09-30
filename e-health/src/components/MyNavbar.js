import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

export default function MyNavbar() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };
  return (
    <Navbar
      collapseOnSelect
      bg="#21232F"
      variant="dark"
      style={{ marginTop: "20px" }}
    >
      <Container>
        <Navbar.Brand onClick={navigateHome}>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <div className="sign">
              <LinkContainer to="/login">
                <Nav.Link
                  eventKey={2}
                  href="#memes"
                  style={{ color: "white", paddingRight: "30px" }}
                >
                  Contact
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link style={{ color: "white" }}>SignIn</Nav.Link>
              </LinkContainer>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
