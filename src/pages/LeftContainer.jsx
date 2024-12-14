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
          display: { xs: "block", sm: "none" }, 
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
          display: { xs: "none", sm: "block" }, 
          width: 240,
          backgroundColor: "#fff",
          height: "100vh",
        }}
      >
        <Sidebar />
      </Box>
    </React.Fragment>
  );
}
