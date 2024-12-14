import * as React from "react";
import Box from "@mui/material/Box";
import Image from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import underConstructionImage from "../../assets/pageunderconstruction.jpg";

export default function UnderConstruction() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 4,
      }}
    >
      <Image
        component="img"
        src={underConstructionImage}
        alt="Under Construction"
        sx={{
          width: "80%",
          maxWidth: 500,
          height: "auto",
          marginBottom: 2,
        }}
      />
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          color: "#888",
        }}
      >
        This page is under construction. Please check back later.
      </Typography>
    </Box>
  );
}
