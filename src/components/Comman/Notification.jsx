import React, { useState } from "react";
import {
  Box,
  IconButton,
  Badge,
  Popper,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ClickAwayListener,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Notification = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([
    "New message from John",
    "Your report has been submitted",
    "Server maintenance scheduled at 8 PM",
  ]);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "notification-popper" : undefined;

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show notifications"
        onClick={handleClick}
      >
        <Badge badgeContent={notifications.length} color="error">
          <NotificationsIcon sx={{ color: "#1e83ff" }} />
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
              width: 300,
              maxHeight: 400,
              overflowY: "auto",
              padding: 2,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 1 }}
            >
              Notifications
            </Typography>
            <List>
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <ListItem key={index} sx={{ padding: 1 }}>
                    <ListItemText primary={notification} />
                  </ListItem>
                ))
              ) : (
                <Typography variant="body2" color="text.secondary">
                  No new notifications
                </Typography>
              )}
            </List>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
};

export default Notification;
