"use client";

import {
  Collapse,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { palette } from "@/components/ThemeRegistry/theme";
import { useEffect, useState } from "react";

const StepHome: React.FC = (): JSX.Element => {
  const [titleDisplay, setTitleDisplay] = useState(false);
  const [subtitleDisplay, setSubtitleDisplay] = useState(false);

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
        backgroundColor: palette.light.bg,
        height: "470px",
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
            fontSize: {xs: "4rem", sm: "5rem"},
            textAlign: "center",
            px: 3
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
            fontSize: {xs: "2rem", md: "3rem"},
            textAlign: "center",
            px: 3
          }}
        >
          Freelance Software Engineer
        </Typography>
      </Collapse>
      <LinearProgress
        sx={{
          position: "absolute",
          top: "470px",
          width: "100%",
          filter: `drop-shadow(0px 0px 20px ${palette.light.primary})`,
        }}
      />
    </Stack>
  );
}

export default StepHome;