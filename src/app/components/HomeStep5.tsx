"use client";

import {
  Box,
  CardActionArea,
  Collapse,
  Grow,
  Stack,
  SxProps,
  Typography,
  Zoom,
} from "@mui/material";
import { palette } from "@/app/theme";
import { CSSProperties, useEffect, useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

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
    link: "https://github.com/guo-yu9594/area",
  },
  {
    name: "Interview.",
    imgSrc:
      "https://github.com/guo-yu9594/particeep-interview/raw/master/public/app_screen.png",
    imgAlt: "interview-picture",
    description: "2 days individual project challenge",
    link: "https://github.com/guo-yu9594/particeep-interview",
  },
  {
    name: "Adopte un chat",
    imgSrc:
      "https://github.com/guo-yu9594/CAT_ADOPT_APP/raw/main/asset/cat-app.png",
    imgAlt: "cat-adopt-picture",
    description: "1 day individual project challenge",
    link: "https://github.com/guo-yu9594/CAT_ADOPT_APP",
  },
];

const arrowIconStyle: SxProps = {
  position: "absolute",
  bottom: 50,
  right: 50,
};

export default function HomeStep5(): JSX.Element {
  const [isDisplay, setIsDisplay] = useState(false);
  const [projectsDisplay, setProjectsDisplay] = useState(
    new Array(projects.length).fill(false)
  );

  useEffect(() => {
    const checkDisplayCond = () => {
      if (isDisplay === false && window.scrollY >= 1048) setIsDisplay(true);
      else if (isDisplay === true && window.scrollY < 1048) setIsDisplay(false);
    };
    checkDisplayCond();
    if (isDisplay === true) {
      setTimeout(() => {
        for (let i = 0; i < projectsDisplay.length; i++) {
          if (projectsDisplay[i] === false) {
            let tmp = [...projectsDisplay];
            tmp[i] = true;
            setProjectsDisplay(tmp);
            return;
          }
        }
      }, 150);
    } else if (projectsDisplay.includes(true))
      setProjectsDisplay(new Array(projects.length).fill(false));
    window.addEventListener("scroll", checkDisplayCond);
  }, [isDisplay, projectsDisplay]);

  return (
    <Box sx={mainBoxStyle}>
      <Stack sx={{ width: "95%", height: "95%" }} direction="row" spacing={5}>
        {projects.map((project, index) => {
          return (
            <Zoom in={projectsDisplay[index]} key={project.name}>
              <CardActionArea
                sx={projectBoxStyle}
                href={project.link}
                target="_blank"
              >
                <img
                  style={imageStyle}
                  src={project.imgSrc}
                  alt={project.imgAlt}
                ></img>
                <Typography color="black" sx={projectNameStyle}>
                  {"// " + project.name}
                </Typography>
                <Typography color="black" sx={projectDescStyle}>
                  {project.description}
                </Typography>
                <ArrowOutwardIcon fontSize="large" sx={arrowIconStyle} />
              </CardActionArea>
            </Zoom>
          );
        })}
      </Stack>
    </Box>
  );
}
