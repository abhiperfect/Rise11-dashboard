import React from "react";
import { Typography, Button, Box } from "@mui/material";
import MyCard from "./MyCard";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import UploadCard from "../../../../Comman/UploadCard";

const AgreementUnderDisputes = () => {
  return (
    <MyCard
      title="Agreement under Disputes"
      Icon={
        <TextSnippetOutlinedIcon
          style={{ fontSize: "40px", color: "#1e83ff" }}
        />
      }
    >
     <Box sx={{
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
     }}>
      <UploadCard title={'Upload the Contract'}/>
      <UploadCard title={'Aribiration Agreement'} />
      </Box> 
    </MyCard>
  );
};

export default AgreementUnderDisputes;
