import "../styles/home.css";
import Nav from "react-bootstrap/Nav";
import HomePhoto from "../images/pills.png";
import { Button } from "react-bootstrap";
import gestion from "../images/gestion.png";
import interne from "../images/interne.png";
import fichier from "../images/fichier.png";
import { LinkContainer } from "react-router-bootstrap";
import MyNavbar from "../components/MyNavbar";

const Home = () => {
  return (
    <div>
      {/* navbar */}
      <MyNavbar />
      {/* navbar fin */}
      <div className="split left">
        <div>
          <img
            src={HomePhoto}
            style={{
              paddingLeft: "15rem",
              height: "400px",
              marginTop: "100px",
            }}
          />
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <h1 style={{ color: "#08E864", fontSize: "50px" }}>
            Rejoignez notre communoté !
          </h1>
          <br />
          <h4 className="descrip" style={{ color: "#ffff" }}>
            <p>
              Rejoignez notre plateform et soyez certains que votre santé est notre priorité .
            </p>
            <br />
            <Button
              style={{
                backgroundColor: "#08E864",
                color: "#21232F",
                fontWeight: "bold",
                borderColor: "#21232F",
              }}
            >
              <LinkContainer
                to="/signup"
                style={{
                  backgroundColor: "#08E864",
                }}
              >
                <Nav.Link>Join Us</Nav.Link>
              </LinkContainer>
            </Button>
          </h4>
        </div>
        {/* partie features */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="py-5 service-1">
          <div className="container">
            <div className="row">
              <div className="col-md-4 wrap-service1-box">
                <div className="card border-0 card-shadow mb-4 bg-light">
                  <div className="card-body text-center bg-light">
                    <div className="my-3 bg-light">
                      <img className="bg-light" src={fichier} alt="wrapkit" />
                    </div>
                    <h6 className="font-weight-medium bg-light">Reclamation</h6>
                    <p className="mt-3 bg-light">
                      You can relay on our amazing features list and also our
                      customer services will be great experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 wrap-service1-box ">
                <div className="card border-0 card-shadow mb-4 bg-light">
                  <div className="card-body text-center bg-light">
                    <div className="my-3 bg-light">
                      <img className="bg-light" src={interne} alt="wrapkit" />
                    </div>
                    <h6 className="font-weight-medium bg-light">
                      Communication
                    </h6>
                    <p className="mt-3 bg-light">
                      You can relay on our amazing features list and also our
                      customer services will be great experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 wrap-service1-box">
                <div className="card border-0 card-shadow mb-4 bg-light">
                  <div className="card-body text-center bg-light">
                    <div className="my-3 bg-light">
                      <img className="bg-light" src={gestion} alt="wrapkit" />
                    </div>
                    <h6 className="font-weight-medium bg-light">
                      Stock Managment
                    </h6>
                    <p className="mt-3 bg-light">
                      You can relay on our amazing features list and also our
                      customer services will be great experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
