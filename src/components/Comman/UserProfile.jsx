import React, { useState } from "react";
import {
  Box,
  IconButton,
  Badge,
  Popper,
  Paper,
  Avatar,
  Typography,
  Divider,
  Button,
  ClickAwayListener,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const UserProfile = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "user-profile-popper" : undefined;

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="user profile"
        onClick={handleClick}
      >
        <Badge badgeContent={0} color="error">
          <PersonOutlineOutlinedIcon sx={{ color: "#1e83ff" }} />
        </Badge>
      </IconButton>

      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-end"
        style={{ zIndex: 1300 }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper
            elevation={3}
            sx={{
              width: 250,
              padding: 2,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                marginBottom: 2,
              }}
            >
              <Avatar
                sx={{ bgcolor: "#1e83ff", width: 50, height: 50 }}
              >
                A
              </Avatar>
              <Box>
                <Typography variant="h6">John Doe</Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize:'12px' }} >
                  john.doe@example.com
                </Typography>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ marginTop: 2 }}>
              <Button
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 1 }}
              >
                Profile
              </Button>
              <Button
                variant="contained"
                color="error"
                fullWidth
              >
                Logout
              </Button>
            </Box>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
};

export default UserProfile;
