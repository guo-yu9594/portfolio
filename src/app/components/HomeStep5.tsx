"use client";

import { Box, CardActionArea, Stack, SxProps, Typography } from "@mui/material";
import { palette } from "../layout";
import { CSSProperties } from "react";

const mainBoxStyle: SxProps = {
  width: "100vw",
  height: "50vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mb: "5vh",
};

const projectBoxStyle: SxProps = {
  width: "100%",
  height: "100%",
  bgcolor: palette.light.primary,
  borderRadius: 25,
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",
};

const imageStyle: CSSProperties = {
  objectFit: "cover",
  width: "100%",
  height: "65%",
  borderRadius: "97px 97px 0 0",
};

const projectNameStyle: SxProps = {
  ml: 6,
  mt: 3,
  fontSize: 25,
  fontWeight: 600,
};

const projectDescStyle: SxProps = {
  mt: 2,
  ml: 6,
};

const projects = [
  {
    name: "Area",
    imgSrc: "https://github.com/guo-yu9594/area/raw/main/public/web.png",
    imgAlt: "area-picture",
    description: "1+ month group project",
  },
  {
    name: "Interview.",
    imgSrc:
      "https://github.com/guo-yu9594/particeep-interview/raw/master/public/app_screen.png",
    imgAlt: "interview-picture",
    description: "2 days individual project challenge",
  },
  {
    name: "Adopte un chat",
    imgSrc:
      "https://github.com/guo-yu9594/CAT_ADOPT_APP/raw/main/asset/cat-app.png",
    imgAlt: "cat-adopt-picture",
    description: "1 day individual project challenge",
  },
];

export default function HomeStep5(): JSX.Element {
  return (
    <Box sx={mainBoxStyle}>
      <Stack sx={{ width: "95%", height: "95%" }} direction="row" spacing={5}>
        {projects.map((project) => {
          return (
            <CardActionArea key={project.name} sx={projectBoxStyle}>
              <img
                style={imageStyle}
                src={project.imgSrc}
                alt={project.imgAlt}
              ></img>
              <Typography
                color="black"
                sx={projectNameStyle}
              >
                {"// " + project.name}
              </Typography>
              <Typography color="black" sx={projectDescStyle}>
                { project.description }
              </Typography>
            </CardActionArea>
          );
        })}
      </Stack>
    </Box>
  );
}
