import React, { useEffect, useState } from "react";
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
  const [ids, setIds] = useState(id);
  const dispatch = useAppDispatch();
  let next = +id! + 1;
  let prev = +id! - 1;
  if (next > 3) next = 1;
  if (prev < 1) prev = 3;

  useEffect(() => {
    dispatch(fetchSingleFamily(id!));
  }, [dispatch]);
  let species = fam.species;
  // function handleClick() {
  //   useEffect(() => {
  //     dispatch(fetchSingleFamily(id!));
  //   }, [dispatch]);
  // }
  let button;
  if (props.theme === "dark") button = "dButton";
  if (props.theme === "light") button = "lButton";
  return (
    <Box>
      <div className="family">
        <Button>
          <Typography className={button} component={Link} to="/">
            Back to home
          </Typography>
        </Button>

        <h2>{fam.name}</h2>
        <h3>{fam.about}</h3>
        <h4>Species in this family:</h4>
        <Grid display="flex" flexWrap="wrap">
          {species && species.length ? (
            species.map((species: Family) => (
              <div key={species.id}>
                {props.theme === "dark" ? (
                  <Card
                    raised
                    sx={{
                      width: 500,
                      ml: 10,
                      mb: 3,
                      padding: "0.1em",
                      height: 500,
                      color: "#F5F5F0",
                      bgcolor: "#3A5A40",
                    }}>
                    <CardMedia component="img" image={species.imageUrl} />
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
                ) : (
                  <Card
                    raised
                    sx={{
                      width: 500,
                      ml: 10,
                      mb: 3,
                      padding: "0.1em",
                      height: 500,
                      color: "#3A5A40",
                      bgcolor: "#F5F5F0",
                    }}>
                    <CardMedia component="img" image={species.imageUrl} />
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
                )}
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
