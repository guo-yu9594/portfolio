"use client";

import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const navItems = ["Accueil", "Éducation", "Expériences", "Projets", "Contact"];

interface NavBarProps {
  handleScroll: (title: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ handleScroll }): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 700 }}>
        GUO YU
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleScroll(item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        sx={{ bgcolor: "transparent", backdropFilter: "blur(10px)" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
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
                onClick={() => handleScroll(item)}
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
    </>
  );
};

export default NavBar;
