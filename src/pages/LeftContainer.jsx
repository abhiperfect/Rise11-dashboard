import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Sidebar from "../components/leftContainer/Sidebar";
import { Drawer } from "@mui/material";

export default function LeftContainer({ open, toggleDrawer }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Drawer
        open={open}
        onClose={toggleDrawer}
        variant="temporary"
        sx={{
          display: { xs: "block", sm: "none" }, // Show Drawer on mobile (small screens)
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Sidebar />
      </Drawer>

      <Box
        sx={{
          display: { xs: "none", sm: "block" }, // Show Sidebar permanently on larger screens
          width: 240,
          backgroundColor: "#fff",
          boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)",
          height: "100vh",
        }}
      >
        <Sidebar />
      </Box>
    </React.Fragment>
  );
}
