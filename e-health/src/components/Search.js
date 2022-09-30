import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import "./Search.css";
import Button from "@mui/material/Button";
import tounes from "../images/tounes.png";
import doliprane from "../images/doliprane.png";
import MyNavbar from "./MyNavbar";
import { Card } from "react-bootstrap";
import ReclamerProduit from "../screens/ReclamerProduit";

export default function Search() {
  const [ref, setRef] = useState("");
  const [product, setProduct] = useState({});

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setRef(lowerCase);
  };
  const [clas, setclas] = useState("hidden");
  const [main, setmain] = useState("main");

  const productByRef = () => {
    if (ref.length) {
      const produit = fetch(`http://localhost:5000/api/products/${ref}/product`)
        .then(async (response) => {
          const data = await response.json();
          setProduct(data[0]);
        })
        .catch((error) => console.log(error));
    }
    show();
  };

  const show = () => {
    setclas("shown");
    setmain("hidden");
  };
  return (
    <div>
      <MyNavbar />
      <br />
      <br />
      <br />
      <div className={main}>
        <h2 style={{ color: "white" }}> Reference Of The Medication </h2>
        <div className="search">
          <TextField
            id="outlined-basic"
            className="bg-light"
            onChange={inputHandler}
            fullWidth
            label="Reference"
            style={{ borderColor: "white", weight: "20px" }}
          />
        </div>
        <Button
          variant="contained"
          style={{ backgroundColor: "#0BE66C" }}
          onClick={() => productByRef()}
        >
          Search
        </Button>
      </div>
      {console.log(product)}
      {product && (
        <div className={clas}>
          <div className="row m-0">
            <div className="col-lg-7 pb-5 pe-lg-5">
              <div className="row">
                <div className="col-4" style={{marginLeft:"80px"}}>
                  <img src={tounes} alt="" />
                </div>
                <div style={{ marginLeft: "650px", marginTop: "-450px" }}>
                  <Card
                    className="col-7"
                    style={{
                      marginBottom: "80px",
                      marginLeft: "80px",
                      borderColor: "white",
                      borderWidth: "3px",
                      backgroundColor: "#21232F",
                    }}
                  >
                    <Card.Body>
                      <h2 style={{ color: "#08EA6E" }}>Doliprane :</h2>
                      <br />

                      <p style={{ color: "white" }}>
                        DOLIPRANE 1000 mg en comprimés sécables est réservé aux
                        adultes et à l’enfant de plus de 15 ans. Pour les
                        adultes et les enfants de plus de 15 ans, prendre 1
                        comprimé à avaler avec un verre d’eau et à renouveler si
                        besoin toutes les 6 heures, sans dépasser 4 comprimés
                        par jour .
                      </p>
                      <div>
                        <ReclamerProduit ></ReclamerProduit>
                        <br />
                        <img
                          src={doliprane}
                          style={{
                            width: "150px",

                            marginTop: "-20px",
                          }}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
