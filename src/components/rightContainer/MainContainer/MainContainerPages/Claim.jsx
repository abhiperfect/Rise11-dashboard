import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Heading from "../../../Comman/Heading";
import ClaimValue from "./claim/ClaimValue";
import Place from "./claim/Place";
import Language from "./claim/Language";
import Statement from "./claim/Statement";
import AgreementUnderDisputes from "./claim/AgreementUnderDisputes";
import AdditionalDocumentation from "./claim/AdditionalDocumentation";

export default function Claim() {
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
      <Heading title="File your Claim." subtitle="(Approx 5 Min)" />
      <Container>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            padding: 2,
            justifyContent: "space-between",
            overflow: "auto",
          }}
        >
          <Box
            sx={{
              flex: "1 1 calc(33.33% - 16px)",
              minWidth: "300px",
            }}
          >
            <ClaimValue />
          </Box>
          <Box
            sx={{
              flex: "1 1 calc(33.33% - 16px)",
              minWidth: "300px",
            }}
          >
            <Place />
          </Box>
          <Box
            sx={{
              flex: "1 1 calc(33.33% - 16px)",
              minWidth: "300px",
            }}
          >
            <Language />
          </Box>
        </Box>
      </Container>
      <Container>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            padding: 2,
            justifyContent: "space-between",
            overflow: "auto",
          }}
        >
          <Box
            sx={{
              flex: "1 1 calc(33.33% - 16px)",
              minWidth: "300px",
            }}
          >
            <Statement />
          </Box>
          <Box
            sx={{
              flex: "1 1 calc(33.33% - 16px)",
              minWidth: "300px",
            }}
          >
            <AgreementUnderDisputes />
          </Box>
          <Box
            sx={{
              flex: "1 1 calc(33.33% - 16px)",
              minWidth: "300px",
            }}
          >
            <AdditionalDocumentation />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
