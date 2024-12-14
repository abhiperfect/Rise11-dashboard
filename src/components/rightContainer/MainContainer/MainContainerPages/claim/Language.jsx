import React, { useState } from "react";
import {
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Menu,
  MenuItem,
  InputAdornment,
  IconButton,
} from "@mui/material";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import { styled } from "@mui/system";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const languages = ["English", "Spanish", "French", "German", "Mandarin"];

  const handleTextFieldClick = (event) => {
    setAnchorEl(event.currentTarget); 
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    handleClose();
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
        <TranslateOutlinedIcon style={{ fontSize: "40px", color: "#1e83ff" }} />
        <Typography variant="h6">Language</Typography>
      </Box>
      <Box sx={{ display: "flex", paddingLeft: "50px", paddingRight: "50px" }}>
        <Box>
          <CustomTextField
            label="Select the language for proceedings"
            value={selectedLanguage} 
            fullWidth
            margin="normal"
            sx={{ backgroundColor: "#f4f5fc" }}
            onClick={handleTextFieldClick} 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <ArrowDropDownIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)} 
            onClose={handleClose} 
            PaperProps={{
              sx: {
                width: anchorEl ? anchorEl.offsetWidth : "360px",
                maxHeight: 200,
                overflowY: "auto", 
              },
            }}
          >
            {languages.map((language, index) => (
              <MenuItem
                key={index}
                onClick={() => handleLanguageSelect(language)}
              >
                {language}
              </MenuItem>
            ))}
          </Menu>
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
