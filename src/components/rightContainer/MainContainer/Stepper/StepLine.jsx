import Box from "@mui/material/Box";
import React from "react";

const StepLine = ({open = true}) => {

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
        backgroundColor: 'primary.main',
        height:'3px',
        visibility: open ? 'visible' : 'hidden',
        width: '100%',
      }}
    >
    </Box>
  );
};

export default StepLine;