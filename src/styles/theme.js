import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2c3e50",
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3498db",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
});