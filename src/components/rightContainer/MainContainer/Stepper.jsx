import React, { useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  MobileStepper,
  Button,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import StepLine from "./Stepper/StepLine";
import { Margin } from "@mui/icons-material";
// Steps for the stepper
const steps = [
  "Preliminary",
  "Your Details",
  "KYC",
  "Parties",
  "Claim",
  "Review",
  "Payment",
];

// Custom step icon for active, completed, and upcoming steps
const StepIcon = ({ active, completed }) => {
  return completed ? (
    <CheckCircleIcon sx={{ color: "#1e83ff", fontSize: 30 }} />
  ) : (
    <RadioButtonUncheckedIcon
      sx={{ color: active ? "#1e83ff" : "#cfd8dc", fontSize: 30 }}
    />
  );
};

// Main Stepper Component
const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(3); // Default active step is 3rd (KYC)
  const isSmallScreen = useMediaQuery("(max-width: 768px)"); // Check for small screens
  const theme = useTheme();

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      Math.min(prevActiveStep + 1, steps.length - 1)
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
        background: "#f4f5fc",
        borderRadius: 3,
      }}
    >
      {/* Stepper for Large Screens */}
      {!isSmallScreen && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "100%", // Ensure full width
          }}
        >
          {steps.map((label, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flex: 1, // Equal spacing between steps
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => handleStepClick(index)}
            >
              {/* Step Label */}
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    color: index <= activeStep ? "#000" : "#8e8e8e",
                    fontSize: "20px",
                  }}
                >
                  0{index + 1}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: index === activeStep ? "bold" : "normal",
                    color: index <= activeStep ? "#000" : "#8e8e8e",
                    textAlign: "center",
                  }}
                >
                  {label}
                </Typography>
              </Box>

              {/* Step Icon */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {index == 0 ? <StepLine open={false} /> : <StepLine />}
                <Box sx={{ margin: "0 8px" }}>
                  <StepIcon
                    active={index === activeStep}
                    completed={index < activeStep}
                  />
                </Box>

                {index == 6 ? <StepLine open={false} /> : <StepLine />}
              </Box>
              <Typography variant="body2" sx={{
                fontWeight: "bold",
                color: index <= activeStep ? "#000" : "#8e8e8e",
                fontSize: "12px",
                textAlign: "center",
              }}>
                {index < activeStep ? null : "(Approx 5 Min)"}
                
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      {/* MobileStepper for Small Screens */}
      {isSmallScreen && (
        <MobileStepper
          variant="dots"
          steps={steps.length}
          position="static"
          activeStep={activeStep}
          sx={{
            width: "100%",
            position: "fixed",
            bottom: 0,
            left: 0,
            background: "#f4f5fc",
            boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
          }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      )}
    </Box>
  );
};

export default StepperComponent;
