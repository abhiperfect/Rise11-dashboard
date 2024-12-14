import React from "react";
import { TextField, Typography, Box } from "@mui/material";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import { styled } from "@mui/system";

// Custom styled TextField
const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none", // Remove border by default
    },
    "&:hover fieldset": {
      border: "none", // Remove border on hover
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #1e83ff", // Primary color border on focus
    },
  },
  "& .MuiInputLabel-root": {
    color: "#000", // Optional: Change label color
  },
});

const ClaimValue = () => {
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
      <Box sx={{ display: 'flex', paddingLeft: '50px', paddingRight: '50px' }}>
        <Box>
          <CustomTextField
            label="Contract Value"
            type="number"
            fullWidth
            margin="normal"
            sx={{ backgroundColor: '#f4f5fc' }}
            InputProps={{
              endAdornment: <Typography>USD</Typography>,
            }}
          />
          <CustomTextField
            label="Claim Value"
            type="number"
            fullWidth
            margin="normal"
            sx={{ backgroundColor: '#f4f5fc' }}
            InputProps={{
              endAdornment: <Typography>USD</Typography>,
            }}
          />
          <Typography variant="body2" color="#ffab45" sx={{ fontWeight: '500' }}>
            150% of Contract Value
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ClaimValue;
