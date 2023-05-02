import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Typography, AppBar, Box, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Typography component={Link} to="/home" sx={{ color: "black" }}>
            Home
          </Typography>

          <Typography component={Link} to="/family/1" sx={{ color: "black" }}>
            Alligatoroidea
          </Typography>

          <Typography component={Link} to="/family/2" sx={{ color: "black" }}>
            Crocodylidae
          </Typography>

          <Typography component={Link} to="/family/3" sx={{ color: "black" }}>
            Gavialidae
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
