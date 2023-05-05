import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import { Theme } from "../interfaces";
import { Switch } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { muiTheme } from "./MuiTheme";
import { FormGroup, FormControlLabel } from "@mui/material";
const App = () => {
  const [theme, setTheme] = useState("light");
  const [checked, setChecked] = useState(true);
  let label;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (theme === "light") {
      setTheme("dark");
      label = "Switch to light mode";
    } else {
      setTheme("light");
      label = "Switch to dark mode";
    }
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <ThemeProvider theme={muiTheme}>
        <FormGroup sx={{ width: "8vw" }}>
          <FormControlLabel
            control={
              <Switch
                checked={checked}
                className="switch"
                onChange={handleChange}
              />
            }
            label={checked ? "Dark mode" : "Light mode"}
          />
        </FormGroup>
        <Button onClick={handleOpen}>Open modal</Button>

        <AppRoutes theme={theme} />
      </ThemeProvider>
    </div>
  );
};

export default App;
