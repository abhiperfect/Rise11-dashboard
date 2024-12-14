import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import StepperComponent from "./MainContainer/Stepper";
import MainContainerPages from "./MainContainer/MainContainerPages";
export default function MainContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Box
          sx={{
            bgcolor: "#f4f5fc",
            height: "calc(100vh - 64px)",
            borderTopLeftRadius: "40px",
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <StepperComponent />
          <MainContainerPages />
        </Box>
      </Container>
    </React.Fragment>
  );
}
