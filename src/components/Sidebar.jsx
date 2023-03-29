import React from "react";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import {
  SearchOutlined,
  HomeOutlined,
  LibraryMusicOutlined,
  PlaylistAddOutlined,
  FavoriteOutlined,
  LanguageOutlined,
} from "@mui/icons-material";
import LogoImage from "../assets/logo.png";

const drawerWidth = 320;

const navItems = [
  {
    text: "Home",
    icon: <HomeOutlined />,
  },
  {
    text: "Search",
    icon: <SearchOutlined />,
  },
  {
    text: "Your Library",
    icon: <LibraryMusicOutlined />,
  },
  {
    text: "Create Playlist",
    icon: <PlaylistAddOutlined />,
  },
  {
    text: "Liked Songs",
    icon: <FavoriteOutlined />,
  },
];

const bottomText = [
  "Legal",
  "Privacy Center",
  "Privacy Policy",
  "Cookies",
  "About Ads",
];

const LeftDrawer = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          backgroundColor: "black",
          color: "white",
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Box width="100%">
        <Box m="1.5rem 2rem 2rem 2.5rem">
          <Box display="flex" alignItems="center" gap="0.5rem">
            <img
              src={LogoImage}
              alt="logo"
              className="rounded-full h-16 w-16"
            />
            <Typography variant="h4" fontWeight="bold">
              Spotify
            </Typography>
          </Box>
          <Divider />

          {/* HOME, SEARCH & LIBRARY */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: "2.5rem",
              gap: "1.5rem",
            }}
          >
            {navItems.slice(0, 3).map(({ text, icon }) => (
              <Grid container key={text} alignItems="center" spacing={2}>
                <Grid item>
                  {React.cloneElement(icon, { sx: { fontSize: "2.5rem" } })}
                </Grid>
                <Grid item>
                  <Typography variant="h6" fontWeight="bold">
                    {text}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Box>

          {/* PLAYLIST AND LIKED */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: "4.5rem",
              gap: "1.5rem",
            }}
          >
            {navItems.slice(-2).map(({ text, icon }) => (
              <Grid container key={text} alignItems="center" spacing={2}>
                <Grid item>
                  {React.cloneElement(icon, { sx: { fontSize: "2.5rem" } })}
                </Grid>
                <Grid item>
                  <Typography variant="h6">{text}</Typography>
                </Grid>
              </Grid>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: "4.5rem",
              gap: "1rem",
            }}
          >
            <Grid
              container
              alignItems="center"
              justifyItems="center"
              spacing={2}
            >
              <Grid item>
                {bottomText
                  .filter((_, index) => index % 2 === 0)
                  .map((text) => (
                    <Typography variant="h6">{text}</Typography>
                  ))}
              </Grid>
              <Grid item>
                {[bottomText[1], bottomText[3]].map((text) => (
                  <Typography variant="h6">{text}</Typography>
                ))}
              </Grid>
            </Grid>
          </Box>
          <Box width="100%" m="2rem 0 0 0rem">
            <Button
              variant="contained"
              color="primary"
              startIcon={<LanguageOutlined />}
              style={{
                borderRadius: "20px",
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "2px solid white",
              }}
            >
              English
            </Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default LeftDrawer;
