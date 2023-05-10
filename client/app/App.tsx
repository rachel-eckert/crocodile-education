import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Modal } from "@mui/material";
import AppRoutes from "./AppRoutes";
import { Switch } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { muiTheme } from "./MuiTheme";
import Vocab from "./Vocab";
import { FormGroup, FormControlLabel } from "@mui/material";

const App = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize.current[0]);
  let width;
  let backColor;
  let btn;
  if (windowSize.current[0] < 600) {
    width = "85vw";
  } else {
    width = 500;
  }
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
  if (theme == "light") {
    backColor = "#e1e4dd";
    btn = "#344e41";
  } else {
    backColor = "#344e41";
    btn = "#e1e4dd";
  }
  let style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width,
    bgcolor: backColor,
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
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
        <Box component="span" display="flex" justifyContent="space-between">
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

          <Button sx={{ color: btn }} onClick={handleOpen}>
            View Key Words
          </Button>
        </Box>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Vocab />
            <Button sx={{ float: "right", color: btn }} onClick={handleClose}>
              close
            </Button>
          </Box>
        </Modal>
        <AppRoutes theme={theme} />
      </ThemeProvider>
    </div>
  );
};

export default App;
