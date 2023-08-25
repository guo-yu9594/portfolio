"use client";

import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import {
  Button,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  createTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactNode, useState } from "react";
import { ThemeProvider } from "@emotion/react";

export const palette = {
  light: {
    primary: "#8A4FFF",
    primaryDarken: "#622ad1",
    secondary: "#C3BEF7",
    secondaryDarken: "#8f89cc",
    black: "#0D1821",
    yellow: "#E6E49F",
    orange: "#E2856E",
  },
  dark: {
    primary: "#8A4FFF",
    secondary: "#C3BEF7",
    hoverPrimary: "#1f1eb0",
    black: "#0D1821",
    yellow: "#E6E49F",
    orange: "#E2856E",
  },
};

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  palette: {
    primary: {
      main: palette.light.primary,
      light: palette.light.primary,
      dark: palette.light.primaryDarken,
      contrastText: "white",
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

interface Props {
  window?: () => Window;
  children: ReactNode;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function RootLayout(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <AppBar component="nav">
                <Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: "none" } }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    {navItems.map((item) => (
                      <Button key={item} sx={{ color: "#fff" }}>
                        {item}
                      </Button>
                    ))}
                  </Box>
                </Toolbar>
              </AppBar>
              <nav>
                <Drawer
                  container={container}
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: drawerWidth,
                    },
                  }}
                >
                  {drawer}
                </Drawer>
              </nav>
              <Box
                component="main"
                sx={{ backgroundColor: palette.light.black }}
              >
                <Toolbar />
                {props.children}
              </Box>
            </Box>
          </ThemeProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
