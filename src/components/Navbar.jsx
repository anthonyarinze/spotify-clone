import React from "react";
import {
  Favorite,
  PlayArrow,
  ArrowBackIos,
  ArrowForwardIos,
  MoreHoriz,
  Tag,
  LinkedIn,
  Twitter,
  GitHub,
} from "@mui/icons-material";
import {
  Box,
  AppBar,
  Button,
  Typography,
  Toolbar,
  IconButton,
} from "@mui/material";

const Navbar = () => {
  const drawerWidth = 320;
  const styles = {
    iconButton: {
      marginLeft: "1.4rem",
    },
    box: {
      bgcolor: "#3f3f3d",
      borderRadius: "50%",
      p: 3.4,
      marginTop: 2,
      height: 40,
      width: 40,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      marginLeft: "1rem",
    },
  };

  return (
    <AppBar
      sx={{
        height: 90,
        position: "static",
        background: "grey",
        boxShadow: "none",
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
      position="fixed"
    >
      <Toolbar>
        {/* LEFT SIDE START */}
        <Box sx={styles.box}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <ArrowBackIos style={styles.iconButton} />
          </IconButton>
        </Box>
        <Box sx={styles.box}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <ArrowForwardIos style={styles.iconButton} />
          </IconButton>
        </Box>
        {/* LEFT SIDE END */}

        {/* RIGHT SIDE START */}
        <Box
          sx={{
            ml: "auto",
            mt: "auto",
            display: "flex",
          }}
        >
          <Typography variant="h5" sx={{ m: "auto", mr: "1.5rem" }}>
            Sign up
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{
              borderRadius: "80px",
              height: 65,
              width: 140,
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
              fontSize: "1.2rem",
              border: "1px solid white",
            }}
          >
            Log in
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
