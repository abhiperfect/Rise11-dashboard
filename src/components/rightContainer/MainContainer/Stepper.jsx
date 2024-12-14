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
import { useNavigate } from "react-router-dom";

const steps = [
  { label: "Preliminary", route: "/preliminary" },
  { label: "Your Details", route: "/your-details" },
  { label: "KYC", route: "/kyc" },
  { label: "Parties", route: "/parties" },
  { label: "Claim", route: "/claim" },
  { label: "Review", route: "/review" },
  { label: "Payment", route: "/payment" },
];

const StepIcon = ({ active, completed }) => {
  return completed ? (
    <CheckCircleIcon sx={{ color: "#1e83ff", fontSize: 30 }} />
  ) : (
    <RadioButtonUncheckedIcon
      sx={{ color: active ? "#1e83ff" : "#cfd8dc", fontSize: 30 }}
    />
  );
};

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(4);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const theme = useTheme();
  const navigate = useNavigate(); 

  const handleStepClick = (index, route) => {
    setActiveStep(index);
    navigate(route);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      Math.min(prevActiveStep + 1, steps.length - 1)
    );
    navigate(steps[Math.min(activeStep + 1, steps.length - 1)].route);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
    navigate(steps[Math.max(activeStep - 1, 0)].route);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
        pb: 0,
        background: "#f4f5fc",
        borderRadius: 3,
      }}
    >
      {!isSmallScreen && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "100%",
          }}
        >
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => handleStepClick(index, step.route)}
            >
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
                  {step.label}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {index === 0 ? <StepLine open={false} /> : <StepLine />}
                <Box sx={{ margin: "0 8px" }}>
                  <StepIcon
                    active={index === activeStep}
                    completed={index < activeStep}
                  />
                </Box>
                {index === steps.length - 1 ? (
                  <StepLine open={false} />
                ) : (
                  <StepLine />
                )}
              </Box>
            </Box>
          ))}
        </Box>
      )}

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
