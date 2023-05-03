import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import { Theme } from "../interfaces";
import { Switch } from "@mui/material";
const App = () => {
  const [theme, setTheme] = useState("light");
  const [checked, setChecked] = useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const label = { inputProps: { "aria-label": "meeeeep" } };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <Switch {...label} checked={checked} onChange={handleChange} />
      {/* {theme === "light" ? (
        <Button sx={{ color: "#344e41" }} onClick={toggleTheme}>
          Dark Mode
        </Button>
      ) : (
        <Button sx={{ color: "#e1e4dd" }} onClick={toggleTheme}>
          Light Mode
        </Button>
      )} */}
      <Navbar />
      <AppRoutes theme={theme} />
    </div>
  );
};

export default App;
