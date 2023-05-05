import React, { useEffect, useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useDispatch, useSelector } from "react-redux";
import { Family } from "../../interfaces";
import { fetchSingleFamily } from "./singleFamilySlice";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Box,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import { Theme } from "../../interfaces";
const SingleFamily = (props: Theme) => {
  const { id } = useParams();
  const fam = useAppSelector((state) => state.family);

  const dispatch = useAppDispatch();

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize.current[0]);
  let imgClass: string;
  let height: string;
  let width: string;
  if (windowSize.current[0] < 600) {
    width = "90vw";
    height = "auto";
    imgClass = "ignore";
  } else {
    width = "500px";
    height = "500px";
    imgClass = "crocimg";
  }
  useEffect(() => {
    dispatch(fetchSingleFamily(id!));
  }, [dispatch]);
  let species = fam.species;

  let button;
  let color: string;
  let bg: string;
  if (props.theme === "dark") {
    button = "dButton";
    color = "#F5F5F0";
    bg = "#3A5A40";
  }
  if (props.theme === "light") {
    button = "lButton";
    color = "#3A5A40";
    bg = "#F5F5F0";
  }
  return (
    <Box sx={{ ml: 5, mr: 5 }}>
      <div className="family">
        <Button>
          <Typography className={button} component={Link} to="/">
            Back to home
          </Typography>
        </Button>

        <h2>{fam.name}</h2>
        <h3>{fam.about}</h3>
        <h4>Species in this family:</h4>
        <Grid display="flex" flexWrap="wrap" sx={{ justifyContent: "center" }}>
          {species && species.length ? (
            species.map((species: Family) => (
              <div key={species.id}>
                <Card
                  raised
                  sx={{
                    width: width,
                    ml: "1rem",
                    mr: "1rem",
                    mb: 3,
                    padding: "0.1em",
                    height: height,
                    color: color,
                    bgcolor: bg,
                  }}>
                  <CardMedia
                    className={imgClass}
                    component="img"
                    image={species.imageUrl}
                  />
                  <CardContent>
                    <Typography variant="h6" align="center">
                      {species.name}
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                      {species.scientificName}
                    </Typography>
                    <Typography variant="body2" align="center">
                      {species.description}
                    </Typography>
                    <Typography variant="body2" align="center">
                      <b> Location: </b>
                      <br />
                      {species.location}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))
          ) : (
            <p>There are no species in this family!</p>
          )}
        </Grid>
      </div>
    </Box>
  );
};

export default SingleFamily;
