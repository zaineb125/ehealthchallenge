import React, { useState, useEffect } from "react";
import { Form, Button, Row, Card } from "react-bootstrap";
import login from "../images/login.png";
import MyNavbar from "../components/MyNavbar";
import { Link } from "react-router-dom";

const Login = () => {
  const [region, setRegion] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {}, []);

  return (
    <div className="container">
      <MyNavbar />
      <Card
        className="col-7"
        style={{
          marginTop: "10rem",
          marginLeft: "280px",
          borderColor: "white",
          borderWidth: "3px",
        }}
      >
        <Card.Body>
          <div>
            <Form style={{ padding: "10px" }}>
              <Row className="col-6">
                <Form.Group controlId="formGridEmail">
                  <Form.Label style={{ color: "#08E864" }}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <br />
                <br />
                <br />
                <br />
                <Form.Group controlId="formGridPassword">
                  <Form.Label style={{ color: "#08E864" }}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <br />
              <Button
                type="submit"
                style={{
                  color: "#21232F",
                  backgroundColor: "#08E864",
                  fontWeight: "bold",
                  border: "#08E864",
                  margin: 0,
                }}
              >
                Submit
              </Button>
              <br /><br />
              <p style={{ color: "white" }}>
                create an account{" "}
                <Link to="/signup" style={{ color: "white" }}>
                  signUp
                </Link>
              </p>
            </Form>
          </div>
          <div className="centered">
            <img src={login} style={{ height: "11rem", paddingLeft: "70px" }} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
