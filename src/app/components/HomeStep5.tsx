"use client";

import {
  Box,
  CardActionArea,
  Grow,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import { palette, style } from "@/app/theme";
import { CSSProperties, useEffect, useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const mainBoxStyle: SxProps = {
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mb: "5vh",
};

const projectBoxStyle: SxProps = {
  width: "100%",
  height: { xs: "350px", sm: "470px" },
  bgcolor: palette.light.darkGrey,
  borderRadius: style.borderRadius,
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",
  overflow: "hidden",
  mb: { lg: 0, xs: "20px" },
};

const imageBoxStyle: SxProps = {
  width: "100%",
  height: "65%",
  overflow: "hidden",
};

const imageStyle: CSSProperties = {
  objectFit: "cover",
  width: "100%",
  height: "100%",
  transition: "transform 0.4s",
};

const projectNameStyle: SxProps = {
  ml: 6,
  mt: 3,
  fontSize: 25,
  fontWeight: 900,
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
  color: palette.light.primary
};

export default function HomeStep5(): JSX.Element {
  const [isDisplay, setIsDisplay] = useState(false);
  const [projectsDisplay, setProjectsDisplay] = useState(
    new Array(projects.length).fill(false)
  );
  const [isHovered, setIsHovered] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(-1);
  };

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
      <Stack
        sx={{ width: "95%", height: "95%" }}
        direction={{ lg: "row", xs: "column" }}
        spacing={5}
      >
        {projects.map((project, index) => {
          return (
            <Grow in={projectsDisplay[index]} key={project.name}>
              <CardActionArea
                sx={projectBoxStyle}
                href={project.link}
                target="_blank"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <Box sx={imageBoxStyle}>
                  <img
                    style={{
                      ...imageStyle,
                      transform:
                        isHovered === index ? "scale(1.1)" : "scale(1)",
                    }}
                    src={project.imgSrc}
                    alt={project.imgAlt}
                  ></img>
                </Box>
                <Typography color={palette.light.primary} sx={projectNameStyle}>
                  {"// " + project.name}
                </Typography>
                <Typography color={palette.light.primary} sx={projectDescStyle}>
                  {project.description}
                </Typography>
                <ArrowOutwardIcon fontSize="large" sx={arrowIconStyle} />
              </CardActionArea>
            </Grow>
          );
        })}
      </Stack>
    </Box>
  );
}
