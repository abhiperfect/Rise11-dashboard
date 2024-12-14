import React, { useState } from "react";
import { TextField, Typography, Box } from "@mui/material";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #1e83ff",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#000",
  },
});

const ClaimValue = () => {
  const [contractValue, setContractValue] = useState(""); 
  const [claimValue, setClaimValue] = useState("");

  const handleContractValueChange = (e) => {
    const value = e.target.value;
    setContractValue(value);


    const calculatedClaimValue = value ? (value * 1.5).toFixed(2) : "";
    setClaimValue(calculatedClaimValue);
  };

  return (
    <Box sx={{ width: "360px", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <CalculateOutlinedIcon style={{ fontSize: "40px", color: "#1e83ff" }} />
        <Typography variant="h6">Claim Value</Typography>
      </Box>
      <Box sx={{ display: "flex", paddingLeft: "50px", paddingRight: "50px" }}>
        <Box>

          <CustomTextField
            label="Contract Value"
            type="number"
            fullWidth
            margin="normal"
            value={contractValue}
            onChange={handleContractValueChange}
            sx={{ backgroundColor: "#f4f5fc" }}
            InputProps={{
              endAdornment: <Typography>USD</Typography>,
            }}
          />

          <CustomTextField
            label="Claim Value"
            type="number"
            fullWidth
            margin="normal"
            value={claimValue}
            sx={{ backgroundColor: "#f4f5fc" }}
            InputProps={{
              readOnly: true,
              endAdornment: <Typography>USD</Typography>,
            }}
          />
          {/* Informative Text */}
          <Typography
            variant="body2"
            color="#ffab45"
            sx={{ fontWeight: "500" }}
          >
            150% of Contract Value
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ClaimValue;
