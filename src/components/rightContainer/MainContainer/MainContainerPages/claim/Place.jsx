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
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
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

const Place = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(""); 
  const [radioValue, setRadioValue] = useState("yes");

  const places = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    handleClose();
  };

  const handleTextFieldChange = (event) => {
    setSelectedPlace(event.target.value);
  };

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
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
        <PlaceOutlinedIcon style={{ fontSize: "40px", color: "#1e83ff" }} />
        <Typography variant="h6">Place</Typography>
      </Box>
      <Box sx={{ display: "flex", paddingLeft: "50px", paddingRight: "50px" }}>
        <Box>
          <CustomTextField
            label="Select the Place for proceedings"
            value={selectedPlace} 
            onChange={handleTextFieldChange} 
            fullWidth
            margin="normal"
            sx={{ backgroundColor: "#f4f5fc" }}
            onClick={handleClick}
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
                width: anchorEl ? anchorEl.offsetWidth : "auto",
                maxHeight: 200,
              },
            }}
          >
            {places.map((place, index) => (
              <MenuItem key={index} onClick={() => handlePlaceSelect(place)}>
                {place}
              </MenuItem>
            ))}
          </Menu>
          <Typography>
            Is the place for the proceedings the one mentioned in the agreement?
          </Typography>
          <RadioGroup row value={radioValue} onChange={handleRadioChange}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default Place;
