import * as React from "react";
import Box from "@mui/material/Box";
import Heading from "../../../Comman/Heading";
import UnderConstruction from "../../../Comman/UnderConstruction";

export default function Preliminary() {
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        borderRadius: 2,
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        padding: 2,
        overflow: "auto",
        scrollbarWidth: "none",
      }}
    >
      <Heading title="Begin with basic details." subtitle="(Approx 5 Min)" />
      <UnderConstruction />
    </Box>
  );
}
