import React from "react";
import { Typography, TextField, RadioGroup, FormControlLabel, Radio, Box } from "@mui/material";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const Place = () => {
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
    <Box sx={{ display:'flex', paddingLeft:'50px',
      paddingRight:'50px',
    }}>
      <Box>
      <TextField label="Select the Place for proceedings" fullWidth margin="normal" />
      <Typography>Is the place for the proceedings the one mentioned in the agreement?</Typography>
      <RadioGroup row>
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
      </Box>
    </Box>
  </Box>
  );
};

export default Place;
