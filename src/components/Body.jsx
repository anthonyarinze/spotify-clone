import { Box, Typography } from "@mui/material";
import React from "react";

const Body = () => {
  const drawerWidth = 320;
  return (
    <Box
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Box
        sx={{
          height: 380,
          width: "100%",
          background: "linear-gradient(to bottom, #c4c4be, #767672)",
        }}
      ></Box>
    </Box>
  );
};

export default Body;
