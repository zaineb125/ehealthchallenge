import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import "./Search.css";
import Button from "@mui/material/Button";
import taswira from "../images/taswira.png";
import taswira2 from "../images/tounes.png";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Box } from "@mui/material";
import ReclamerProduit from "../screens/ReclamerProduit";
import { useEffect } from "react";
import MyNavbar from "./MyNavbar";

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
        <h2> Reference Of The Medication </h2>
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Reference"
          />
        </div>
        <Button
          variant="contained"
          color="success"
          onClick={() => productByRef()}
        >
          Search
        </Button>
      </div>
      {console.log(product)}
      {product && (
        <div className={clas}>
          <Card sx={{ display: "flex", width: "700px", height: "300px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <CardMedia
                  component="img"
                  height="150"
                  image={taswira}
                  alt="green iguana"
                />
                <Typography component="div" variant="h5">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 300 }}
              image={taswira2}
              alt="Live from space album cover"
            />
          </Card>
          <ReclamerProduit></ReclamerProduit>
        </div>
      )}
    </div>
  );
}
