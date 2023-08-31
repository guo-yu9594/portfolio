"use client";

import {
  Collapse,
  Fade,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { palette } from "@/app/theme";
import { useEffect, useState } from "react";

export default function HomeStep1(): JSX.Element {
  const [titleDisplay, setTitleDisplay] = useState(false);
  const [subtitleDisplay, setSubtitleDisplay] = useState(false);
  const [nbIcons, setNbIcons] = useState(6);

  useEffect(() => {
    if (titleDisplay === false) {
      setTimeout(() => {
        setTitleDisplay(true);
      }, 50);
    }
    if (titleDisplay === true) {
      setTimeout(() => {
        setSubtitleDisplay(true);
      }, 300);
    }
  });

  return (
    <Stack
      sx={{
        backgroundColor: palette.light.black,
        height: "50vh",
        width: "100vw",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Collapse in={titleDisplay}>
        <Typography
          sx={{
            color: "white",
            fontWeight: 800,
            fontSize: "5rem",
            textAlign: "center",
          }}
        >
          GUO YU
        </Typography>
      </Collapse>
      <Collapse in={subtitleDisplay}>
        <Typography
          sx={{
            color: palette.light.primary,
            fontWeight: 300,
            fontSize: "3rem",
          }}
        >
          Freelance software engineer
        </Typography>
      </Collapse>
      <LinearProgress
        sx={{
          position: "absolute",
          bottom: "50%",
          width: "100%",
          filter: `drop-shadow(0px 0px 20px ${palette.light.primary})`,
        }}
      />
    </Stack>
  );
}
