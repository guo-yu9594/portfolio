"use client";

import Link from "next/link";
import DataUsageIcon from "@mui/icons-material/DataUsage";
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
import { ReactNode, useEffect, useState } from "react";
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
    button: {
      textTransform: "none",
    },
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

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function RootLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 960, y: 590 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  let animationRequestId = 0;
  let oldTimeStamp = 0;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const updateCursorPos = (movingSpeed: number, secondsPassed: number) => {
    const distance = movingSpeed * secondsPassed;
    const targetPos = {
      x: mousePos.x + window.scrollX,
      y: mousePos.y + window.scrollY,
    };
    let cursorNextPos = { ...cursorPos };

    if (cursorPos.x < targetPos.x)
      cursorNextPos = {
        x: Math.round(Math.min(cursorPos.x + distance, targetPos.x)),
        y: cursorPos.y,
      };
    else if (cursorPos.x > targetPos.x)
      cursorNextPos = {
        x: Math.round(Math.max(cursorPos.x - distance, targetPos.x)),
        y: cursorPos.y,
      };
    if (cursorPos.y < targetPos.y)
      cursorNextPos = {
        x: cursorNextPos.x,
        y: Math.round(Math.min(cursorPos.y + distance, targetPos.y)),
      };
    else if (cursorPos.y > targetPos.y)
      cursorNextPos = {
        x: cursorNextPos.x,
        y: Math.round(Math.max(cursorPos.y - distance, targetPos.y)),
      };
    if (cursorNextPos.x != cursorPos.x || cursorNextPos.y != cursorPos.y)
      setCursorPos(cursorNextPos);
  };

  const animationLoop: FrameRequestCallback = (
    timeStamp: DOMHighResTimeStamp
  ) => {
    const secondsPassed = (timeStamp - oldTimeStamp) / 1000;

    updateCursorPos(1, secondsPassed);
    oldTimeStamp = timeStamp;
    animationRequestId = window.requestAnimationFrame(animationLoop);
  };
  animationRequestId = window.requestAnimationFrame(animationLoop);

  useEffect(() => {
    console.log("useEffect");
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.cancelAnimationFrame(animationRequestId);
    };
  }, []);

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
                    <MenuIcon />
                  </IconButton>
                  <Stack
                    direction="row"
                    spacing={8}
                    sx={{ display: { xs: "none", sm: "block" } }}
                  >
                    {navItems.map((item) => (
                      <Button key={item} sx={{ color: "#fff" }}>
                        {"//           " + item.toLowerCase()}
                      </Button>
                    ))}
                  </Stack>
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
                <DataUsageIcon
                  color="primary"
                  fontSize="large"
                  sx={{
                    position: "absolute",
                    left: `${cursorPos.x - 20}px `,
                    top: `${cursorPos.y - 18}px`,
                    filter: `drop-shadow(0px 0px 20px white)`
                  }}
                />
                <Toolbar />
                {children}
              </Box>
            </Box>
          </ThemeProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
