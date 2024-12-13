import React from "react";
import { Box, List, ListItem, ListItemText, styled } from "@mui/material";
import { Dashboard } from "@mui/icons-material";
import jur from '../../assets/jur.png';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import AlignVerticalCenterOutlinedIcon from '@mui/icons-material/AlignVerticalCenterOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import getjustice from '../../assets/getjustice.png';
const IconImg = styled('img')({
  width: 160,
  height: 100,
  display: 'block',
  margin: 'auto',
  marginTop: 0,
  padding: 0,
  marginBottom: 10,
});
const Img = styled('img')({
  width: 200,
  height: 260,
  display: 'block',
  margin: 'auto',
  marginBottom: 20,
});

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 240,
        backgroundColor: "#fff",
        boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)",
        height: "100vh",
        padding: 2,
        boxShadow:'none'
      }}
    >
      <IconImg src={jur} alt="jur" />
      <List>
        {[{
          text: "Dashboard",
          icon: <Dashboard sx={{ color: "#84b2e3" }} />
        },
        {
          text: "My Cases",
          icon: <BusinessCenterOutlinedIcon sx={{ color: "#84b2e3" }} />
        },
        {
          text: "Activites",
          icon: <AlignVerticalCenterOutlinedIcon sx={{ color: "#84b2e3" }} />
        },
        {
          text: "Calendar",
          icon: <CalendarMonthOutlinedIcon sx={{ color: "#84b2e3" }} />
        },
        {
          text: "Files",
          icon: <DescriptionOutlinedIcon sx={{ color: "#84b2e3" }} />
        },
        {
          text: "Open a Dispute",
          icon: <VolunteerActivismOutlinedIcon sx={{ color: "#84b2e3" }} />
        }].map((item, index) => (
          <ListItem button key={index}>
            {item.icon}
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                sx: {
                  ml: 2,
                  color: "#7a90a9",
                  fontWeight: "bold",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
      <Img src={getjustice} alt="getjustice" />
    </Box>
  );
};

export default Sidebar;
