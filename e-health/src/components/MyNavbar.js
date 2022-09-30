import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MyNavbar() {
  const navigate = useNavigate();
  const [localStorageVar, setLocalStorageVar] = useState("");

  const navigateHome = () => {
    navigate("/signup");
  };

  const handleLogOut = () => {
    navigateHome();
    localStorage.removeItem("type");
  };

  useEffect(() => {
    const localStorageVar1 = localStorage.getItem("type");
    setLocalStorageVar(localStorageVar1);
  }, [localStorageVar]);

  if (!localStorageVar) {
    return (
      <Navbar
        collapseOnSelect
        bg="#21232F"
        variant="dark"
        style={{ marginTop: "20px" }}
      >
        <Container>
          <Navbar.Brand onClick={navigateHome}>UnRupt</Navbar.Brand>
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
  if (localStorageVar === "pharmacist") {
    return (
      <Navbar
        collapseOnSelect
        bg="#21232F"
        variant="dark"
        style={{ marginTop: "20px" }}
      >
        <Container>
          <Navbar.Brand onClick={navigateHome}>UnRupt</Navbar.Brand>
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
                    Grossistes
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link style={{ color: "white" }}>Reclamation</Nav.Link>
                </LinkContainer>

                <Nav.Link style={{ color: "white" }} onClick={handleLogOut}>
                  LogOut
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  if (localStorageVar === "doctor") {
    console.log("hey");
    return (
      <Navbar
        collapseOnSelect
        bg="#21232F"
        variant="dark"
        style={{ marginTop: "20px" }}
      >
        <Container>
          <Navbar.Brand onClick={navigateHome}>UnRupt</Navbar.Brand>
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
                    Reclamation
                  </Nav.Link>
                </LinkContainer>

                <Nav.Link style={{ color: "white" }} onClick={handleLogOut}>
                  LogOut
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  if (localStorageVar === "supplier") {
    return (
      <Navbar
        collapseOnSelect
        bg="#21232F"
        variant="dark"
        style={{ marginTop: "20px" }}
      >
        <Container>
          <Navbar.Brand onClick={navigateHome}>UnRupt</Navbar.Brand>
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
                    Reclamation
                  </Nav.Link>
                </LinkContainer>

                <Nav.Link style={{ color: "white" }} onClick={handleLogOut}>
                  LogOut
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
