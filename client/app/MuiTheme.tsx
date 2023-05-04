import React, { useState, useEffect } from "react";
import { createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#344e41",
    },
    secondary: {
      main: "#e1e4dd",
    },
  },
});
