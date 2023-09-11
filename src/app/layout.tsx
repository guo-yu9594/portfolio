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
  Stack,
  createTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactNode, useEffect, useRef, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import theme, { palette } from "@/app/theme";
import HomePage from "./page";

const drawerWidth = 240;
const navItems = ["Accueil", "Éducation", "Expériences", "Projets", "Contact"];

export default function RootLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const homeRef = useRef();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        GUO YU
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => homeRef.current?.handleScroll(item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Portfolio d'un freelance Software Engineer junior. Découvrez mes projets et compétences en développement logiciel."
        />
        <meta name="author" content="Guo YU" />
        <title>Guo YU - Software Engineer Portfolio</title>
      </head>
      <body>
        <ThemeRegistry>
          <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <AppBar
                component="nav"
                sx={{ bgcolor: "transparent", backdropFilter: "blur(10px)" }}
              >
                <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: "none" } }}
                  >
                    <MenuIcon sx={{ color: "white" }} />
                  </IconButton>
                  <Stack
                    direction="row"
                    spacing={8}
                    sx={{ display: { xs: "none", sm: "block" } }}
                  >
                    {navItems.map((item) => (
                      <Button
                        key={item}
                        sx={{ color: "#fff" }}
                        onClick={() => homeRef.current?.handleScroll(item)}
                      >
                        {"// " + item.toLowerCase()}
                      </Button>
                    ))}
                  </Stack>
                </Toolbar>
              </AppBar>
              <nav>
                <Drawer
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
              <Box component="main" sx={{ backgroundColor: palette.light.bg }}>
                <Toolbar />
                <HomePage ref={homeRef} />
              </Box>
            </Box>
          </ThemeProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
