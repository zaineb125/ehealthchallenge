import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import pills from "../images/pills-bottle.png";
import MyNavbar from "../components/MyNavbar";

const Signup = () => {
  const [region, setRegion] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [pharmacist, setPharmacist] = useState("");
  const [doctor, setDoctor] = useState("");
  const [supplier, setSupplier] = useState("");

  useEffect(() => {}, []);

  return (
    <div className="container">
      <MyNavbar />
      <Card
        className="col-7"
        style={{
          marginTop: "5rem",
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
                  <Form.Label style={{ color: "#08E864" }}>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <br />
                <br />
                <br />
                <br />
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
                <br />
                <br />
                <br />
                <br />
                <Form.Group controlId="formGridAddress1">
                  <Form.Label style={{ color: "#08E864" }}>Region</Form.Label>
                  <br />
                  <Form.Control
                    placeholder="Region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  />
                </Form.Group>
                <br />
                <br />
                <br />
                <br />
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value={pharmacist}
                      onChange={(e) => setPharmacist(e.target.value)}
                    />
                    <label
                      className="form-check-label"
                      for="inlineRadio1"
                      style={{ color: "white" }}
                    >
                      Pharmacist
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value={supplier}
                      onChange={(e) => setSupplier(e.target.value)}
                    />
                    <label
                      className="form-check-label"
                      for="inlineRadio2"
                      style={{ color: "white" }}
                    >
                      Supplier
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value={doctor}
                      onChange={(e) => setDoctor(e.target.value)}
                    />
                    <label
                      className="form-check-label"
                      for="inlineRadio3"
                      style={{ color: "white" }}
                    >
                      Doctor
                    </label>
                  </div>
                </div>
              </Row>

              <br />

              <Button
                type="submit"
                style={{
                  color: "#21232F",
                  backgroundColor: "#08E864",
                  fontWeight: "bold",
                  border: "#08E864",
                }}
              >
                Submit
              </Button>
            </Form>
          </div>
          <div className="centered">
            <img src={pills} style={{ height: "15rem", paddingLeft: "70px" }} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Signup;
