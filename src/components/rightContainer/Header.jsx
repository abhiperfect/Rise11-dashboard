import React from "react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Notification from "../Comman/Notification";
import UserProfile from "../Comman/UserProfile";

const Header = ({ toggleDrawer }) => {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#ffffff", boxShadow: "none" }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer}
          sx={{
            mr: 2,
            display: { xs: "block", sm: "none" }, 
          }}
        >
          <MenuIcon
            sx={{
              color: "#1784ff",
            }}
          />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />{" "}
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            width: "80px",
          }}
        >
          <Notification />
          <UserProfile />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
