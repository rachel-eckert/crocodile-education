import React from "react";
import { Typography, Box } from "@mui/material";

const Vocab = () => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Typography>
        <b>Brackish water: </b>Water that has a higher salinity than freshwater,
        but a lower salinity than seawater.
      </Typography>
      <Typography>
        <b>Apex predator: </b>A predator at the top of the food chain, without
        any natural predators of its own.
      </Typography>
      <Typography>
        <b>Keystone species: </b>A species that is very important in its
        ecosystem, and can be considered the glue that holds its habitat
        together.
      </Typography>
      <Typography>
        <b>Brumation: </b>Hibernation for cold blooded animals. It is not a true
        hibernation, but a period of inactivity and slugishness, where they may
        still occasionally stir to drink water.
      </Typography>
      <Typography>
        <b>Critically endangered: </b>A species is critically endangered when it
        is facing a high risk of extinction in the wild.
      </Typography>
    </div>
  );
};

export default Vocab;
