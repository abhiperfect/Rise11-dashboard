import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Routes, Route, Navigate } from "react-router-dom";
import Claim from "./MainContainerPages/Claim";
import Kyc from "./MainContainerPages/Kyc";
import YourDetails from "./MainContainerPages/YourDetails";
import Review from "./MainContainerPages/Review";
import Payment from "./MainContainerPages/Payment";
import Parties from "./MainContainerPages/Parties";
import Preliminary from "./MainContainerPages/Preliminary";

export default function MainContainerPages() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          bgcolor: "#f4f5fc",
          borderTopLeftRadius: "10px",
          boxShadow: "none",
          padding: 3,
          height: "100%",
          width: "100%",
          overflow: "auto",
          pt: 0,
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/claim" />} />
          <Route path="/kyc" element={<Kyc />} />
          <Route path="/claim" element={<Claim />} />
          <Route path="/your-details" element={<YourDetails />} />
          <Route path="/review" element={<Review />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/parties" element={<Parties />} />
          <Route path="/preliminary" element={<Preliminary />} />
        </Routes>
      </Container>
    </React.Fragment>
  );
}
