import React from "react";
import {
  Box,
  Card,
  CardMedia,
  IconButton,
  Typography,
  Divider,
  Icon,
} from "@mui/material";
import {
  PlayArrow,
  FavoriteBorderOutlined,
  MoreHoriz,
  Numbers,
} from "@mui/icons-material";
import trackList from "../hooks/Tracklist";
// @ts-ignore
import albumImage from "../assets/album.png";
// @ts-ignore
import tyler from "../assets/tyler.png";
import { margin } from "@mui/system";

const Body = () => {
  const drawerWidth = 320;

  return (
    <Box
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        background: "linear-gradient(to bottom, #595956, #121212)",
      }}
    >
      {/* ALBUM ART AND DETAILS */}
      <Box
        sx={{
          height: 380,
          width: "100%",
          display: "flex",
          background: "linear-gradient(to bottom, #c4c4be, #767672)",
        }}
      >
        {/* ALBUM IMAGE AND DETAILS */}
        <Card
          sx={{
            maxWidth: 280,
            maxHeight: 260,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            m: "4rem 0 1rem 1.5rem",
            boxShadow: "20px 50px 50px rgba(16, 16, 16, 0.3)",
          }}
        >
          <CardMedia
            component="img"
            image={albumImage}
            alt="album"
            sx={{
              width: "80%",
              height: "100%",
            }}
          />
        </Card>
        <Box
          sx={{
            height: 300,
            width: "100%",
            m: "3rem 0 0 2rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Album
          </Typography>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "3rem",
            }}
          >
            CALL ME IF YOU GET LOST
          </Typography>
          <Box
            sx={{
              display: "flex",
              height: "3rem",
              width: "100%",
            }}
          >
            <Card
              sx={{
                borderRadius: "50%",
                boxShadow: "10px 10px 20px #888888",
              }}
            >
              <CardMedia
                component="img"
                image={tyler}
                alt="album"
                sx={{
                  width: "80%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Card>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "1.2rem",
                m: "0.5rem 0 0 0.5rem",
              }}
            >
              Tyler, The Creator ● 2021
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "white",
              m: "0.2rem 0 0 1rem",
            }}
          >
            ● 16 songs, 52 min 50 sec
          </Typography>
        </Box>
      </Box>

      {/* PLAY, LIKE AND MORE */}
      <Box
        sx={{
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            height: 100,
            width: "100%",
            display: "flex",
          }}
        >
          <Box
            sx={{
              bgcolor: "#1ed760",
              m: "1rem 0 0 1.5rem",
              borderRadius: "50%",
              height: 75,
              width: 75,
              display: "flex",
            }}
          >
            <IconButton color="inherit" aria-label="menu">
              <PlayArrow
                style={{
                  color: "black",
                  fontSize: "3.8rem",
                }}
              />
            </IconButton>
          </Box>
          <IconButton color="inherit" aria-label="menu">
            <FavoriteBorderOutlined
              style={{
                color: "grey",
                fontSize: "4rem",
                marginLeft: "2rem",
              }}
            />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <MoreHoriz
              style={{
                color: "grey",
                fontSize: "4rem",
                marginLeft: "1.5rem",
              }}
            />
          </IconButton>
        </Box>

        {/* TRACKLIST */}
        <Box
          sx={{
            height: 100,
            width: "100%",
            background: "inherit",
          }}
        >
          <Box sx={{ display: "flex", m: "2rem 0 0 3.5rem" }}>
            <Numbers sx={{ color: "white" }} />
            <Typography sx={{ ml: "1rem", fontSize: "1.2rem", color: "white" }}>
              Title
            </Typography>
          </Box>
          <Divider
            style={{
              width: "93%",
              background: "white",
              marginTop: "1rem",
              marginLeft: "3rem",
            }}
          />
        </Box>

        {/* TRACK COMPONENT */}

        <Box display="flex" sx={{ ml: "4.1rem" }}>
          <Box sx={{ mr: "1.5rem" }}>
            {trackList.map((serialNumber) => (
              <Typography variant="h5" color="white">
                {serialNumber.serialNumber}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {trackList.map((songTitle, index) => (
              <Box
                key={index}
                sx={{ display: "flex", flexDirection: "column", ml: "1.5rem" }}
              >
                <Typography variant="h6" color="white">
                  {songTitle.songTitle}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "white", marginBottom: 1 }}
                >
                  {songTitle.artist}
                </Typography>
              </Box>
            ))}
          </Box>
          <Typography
            sx={{ ml: "auto", mr: "2rem", mt: "1rem", color: "white" }}
          >
            1:28
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Body;
