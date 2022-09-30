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

export default function Search() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const [clas, setclas] = useState("hidden");
  const [main, setmain] = useState("main");

  const show = () => {
    setclas("shown");
    setmain("hidden");
  };
  return (
    <div className="main">
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
        <Button variant="contained" color="success" onClick={show}>
          Search
        </Button>
      </div>
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
                Medicament{" "}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Medication is very useful you should try it but you have to
                use it wisely
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
    </div>
  );
}
