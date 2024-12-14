import React, { useRef } from "react";
import { Typography, Button, Box } from "@mui/material";
import DifferenceOutlinedIcon from "@mui/icons-material/DifferenceOutlined";
import MyCard from "./MyCard";
import UploadCard from "../../../../Comman/UploadCard";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";

const AdditionalDocumentation = () => {

  const fileInputRef = useRef(null);


  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); 
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
          onClick={handleFileInputClick} 
        >
          <ControlPointOutlinedIcon
            style={{ fontSize: "60px", color: "#1e83ff", width: "100%" }}
          />
          <input
            type="file"
            hidden
            ref={fileInputRef}
          />
        </Button>
      </Box>
    </MyCard>
  );
};

export default AdditionalDocumentation;
