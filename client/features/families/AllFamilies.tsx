import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchFamiliesAsync } from "./familiesSlice";
import { useEffect } from "react";
import { Family } from "../../interfaces";
import { Paper, Grid, Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { muiTheme } from "../../app/MuiTheme";
import { ThemeProvider } from "@mui/material";
import { Theme } from "../../interfaces";
const AllFamilies = (props: Theme) => {
  const allFam: Family[] = useAppSelector((state) => state.families);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFamiliesAsync());
  }, [dispatch]);

  let linkstyle: string;
  if (props.theme == "light") linkstyle = "dFamilyLink";
  if (props.theme == "dark") linkstyle = "lFamilyLink";
  console.log(allFam);
  return (
    <ThemeProvider theme={muiTheme}>
      <div className="family">
        <h1>Welcome to the Crocodile Education Station!</h1>
        <h3>
          Crocodilia is an order of predatory, semiaquatic reptiles. Many
          crocodilians are quite large.
        </h3>
        <br />
        <p>
          They first appeared 95 million years ago. They are also the closest
          living relative to birds, as they are both the only (known) living
          animals of the clade Archosauria.
        </p>

        <p>
          All crocodilians are sorted into 3 distinct families. Click the links
          below to learn more about each family!
        </p>
        <br />
        {allFam && allFam.length
          ? allFam.map((fam) => {
              return (
                <div key={fam.id}>
                  <Link className={linkstyle} to={`/family/${fam.id}`}>
                    <h3>{fam.name}</h3>
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    </ThemeProvider>
  );
};

export default AllFamilies;
