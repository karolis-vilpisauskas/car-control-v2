import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {},
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {},
        input: {},
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {},
      },
    },
  },
});

export default theme;
