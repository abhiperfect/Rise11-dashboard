import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Heading({title = 'File your Claim.', subtitle = '(Approx 5 Min)'}) {
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
          {title}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {subtitle}
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
