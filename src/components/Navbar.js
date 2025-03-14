import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Switch } from "@mui/material";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Shilpa Reddy
        </Typography>
        <IconButton color="inherit" component="a" href="#">
          Home
        </IconButton>
        <IconButton color="inherit" component="a" href="#about">
          About
        </IconButton>
        <IconButton color="inherit" component="a" href="#skills">
          Skills
        </IconButton>
        <IconButton color="inherit" component="a" href="#experience">
          Experience
        </IconButton>
        <IconButton color="inherit" component="a" href="#projects">
          Projects
        </IconButton>
        <IconButton color="inherit" component="a" href="#contact">
          Contact
        </IconButton>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;