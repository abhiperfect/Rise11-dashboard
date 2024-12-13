import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

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
            display: { xs: "block", sm: "none" }, // Show on mobile only
          }}
        >
          <MenuIcon
            sx={{
              color: "#1784ff",
            }}
          />
        </IconButton>
        
        <Box sx={{ flexGrow: 1 }} /> {/* Takes up all available space to push icons to the right */}
        
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            width: "80px",
          }}
        >
          <Badge color="secondary" variant="dot" invisible={false}>
            <NotificationsNoneOutlinedIcon sx={{ color: "#1e83ff", mr: 1 }} /> {/* Added margin-right */}
          </Badge>
          <PersonOutlineOutlinedIcon sx={{ color: "#1e83ff", ml: 2 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
