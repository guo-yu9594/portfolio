import { createTheme } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
});

export const palette = {
  light: {
    primary: "#FFF6E0",
    primaryDarken: "#b3e079",
    secondary: "#C3BEF7",
    secondaryDarken: "#8f89cc",
    darkGrey: "#171613",
    bg: "#0f0f0d",
  },
};

export const style = {
  borderRadius: { xs: 13, sm: 25 },
};

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
          color: "white",
        }
      }
    },
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
    fontFamily: inter.style.fontFamily,
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
      contrastText: palette.light.bg,
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