import React from "react";
import { Typography, Box } from "@mui/material";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";

const MyCard = ({ Icon = <CalculateOutlinedIcon style={{ fontSize: "40px", color: "#1e83ff" }} />, title = "Empty", children }) => {
  return (
    <Box sx={{ width: "360px", display: "flex", flexDirection: "column", gap: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        {Icon} {/* Correctly render the Icon prop */}
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          paddingLeft: "50px",
          paddingRight: "50px",
          justifyContent: "center",
          alignItems: "space-between",
        }}
      >
        {children} {/* Render the children prop correctly */}
      </Box>
    </Box>
  );
};

export default MyCard;
