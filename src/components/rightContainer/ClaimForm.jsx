import React from "react";
import {
  Box,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Button,
} from "@mui/material";

const ClaimForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        p: 3,
        borderRadius: 2,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h6" gutterBottom>
        File your Claim
      </Typography>
      <TextField
        fullWidth
        label="Contract Value"
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Claim Value"
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <RadioGroup row>
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
      <Button variant="contained" sx={{ mt: 3 }}>
        Submit
      </Button>
    </Box>
  );
};

export default ClaimForm;
