import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Heading() {
  return (
    <Box
      sx={{
        margin: "5px 0 20px 0",
        marginLeft: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          paddingTop: 3,
          paddingLeft: 3.5,
          paddingBottom: 1,
        }}
      >
        <Typography fontWeight={"bold"} variant="h5" gutterBottom>
          File your Claim.
        </Typography>
        <Typography variant="body2" gutterBottom>
          (Approx 5 Min)
        </Typography>
      </Box>
      <Box
        sx={{
          height: "2px",
          width: "100%",
          background: "#f4f5fc",
        }}
      >
        <Box
          sx={{
            height: "2px",
            width: "300px",
            background: "#1a82ff",
            marginLeft: 3.5,
          }}
        ></Box>
      </Box>
    </Box>
  );
}
