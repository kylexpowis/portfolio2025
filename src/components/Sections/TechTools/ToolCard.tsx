import React from "react";
import { Box, Typography } from "@mui/material";
import Image from 'next/image';

const ToolCard = ({ title, svg, filter }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100px",
        margin: "1em",
        filter: filter ? "grayscale(100%)" : "none",
        transition: "filter 0.3s ease",
      }}
    >
      <Image 
        src={svg} 
        alt={title}
        width={40}
        height={40}
        style={{ filter: filter ? "invert(1)" : "none" }}
      />
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: "center",
          mt: "0.5em",
          fontSize: "0.9em",
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default ToolCard;
