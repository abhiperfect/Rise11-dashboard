import React from "react";
import {
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
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

const Language = () => {
  return (
    <Box sx={{ width: "360px", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TranslateOutlinedIcon style={{ fontSize: "40px", color: "#1e83ff" }} />
        <Typography variant="h6">Language</Typography>
      </Box>
      <Box sx={{ display: "flex", paddingLeft: "50px", paddingRight: "50px" }}>
        <Box>
          <CustomTextField
            label="Select the language for proceedings"
            fullWidth
            margin="normal"
            sx={{ backgroundColor: "#f4f5fc" }}
          />
          <Typography>
            Is the language for the proceedings the one mentioned in the
            agreement?
          </Typography>
          <RadioGroup row>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default Language;