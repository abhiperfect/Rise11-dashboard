import React, { useRef } from "react";
import { Typography, Button, Box } from "@mui/material";
import DifferenceOutlinedIcon from "@mui/icons-material/DifferenceOutlined";
import MyCard from "./MyCard";
import UploadCard from "../../../../Comman/UploadCard";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";

const AdditionalDocumentation = () => {
  // Create a reference for the file input
  const fileInputRef = useRef(null);

  // Function to trigger file input click
  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input click
    }
  };

  return (
    <MyCard
      title="Additional Documentation"
      Icon={
        <DifferenceOutlinedIcon
          style={{ fontSize: "40px", color: "#1e83ff" }}
        />
      }
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <UploadCard />
        <Button
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "120px",
          }}
          onClick={handleFileInputClick} // Trigger the file input click when button is clicked
        >
          <ControlPointOutlinedIcon
            style={{ fontSize: "60px", color: "#1e83ff", width: "100%" }}
          />
          <input
            type="file"
            hidden
            ref={fileInputRef} // Assign the file input reference
          />
        </Button>
      </Box>
    </MyCard>
  );
};

export default AdditionalDocumentation;
