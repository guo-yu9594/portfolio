import { createTheme } from "@mui/material";

export const palette = {
  light: {
    primary: "#D0FF94",
    primaryDarken: "#b3e079",
    secondary: "#C3BEF7",
    secondaryDarken: "#8f89cc",
    darkGrey: "#11140d",
    black: "black",
  },
};

const theme = createTheme({
  components: {
    MuiCardActionArea: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          transitionDuration: "0.3s",
          '&:hover': {
            opacity: 0.8,
          },
        }),
      },
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: palette.light.primary,
      light: palette.light.primary,
      dark: palette.light.primaryDarken,
      contrastText: "black",
    },
    secondary: {
      main: palette.light.secondary,
      light: palette.light.secondary,
      dark: palette.light.secondaryDarken,
      contrastText: palette.light.black,
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
  },
});

export default theme;