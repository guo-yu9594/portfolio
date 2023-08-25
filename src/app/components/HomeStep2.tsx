"use client";

import WebIcon from "@mui/icons-material/Web";
import CategoryIcon from '@mui/icons-material/Category';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { CSSProperties } from "react";
import { palette } from "@/app/layout";
import {
  Box,
  CardActionArea,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";

const mainBoxStyle: SxProps = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const hookBoxStyle: SxProps = {
  bgcolor: palette.light.primary,
  width: "50%",
  height: "60%",
  borderRadius: 25,
  p: 7,
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const SkillBoxStyle: SxProps = {
  bgcolor: palette.light.secondary,
  width: "100%",
  height: "50%",
  borderRadius: 25,
  pl: 12,
  alignItems: "center",
};

const generateArrowDropDownIcons = (count: number, style: CSSProperties) => {
  const icons = [];
  for (let i = 0; i < count; i++) {
    icons.push(<ArrowDropDownCircleIcon key={i} style={style} />);
  }
  return icons;
};

export default function HomeStep2(): JSX.Element {
  const arrowDropDownCircleIcons = generateArrowDropDownIcons(6, {
    width: 80,
    height: 80,
    color: "white",
  });

  return (
    <Box sx={mainBoxStyle}>
      <Stack direction="row" sx={{ height: "95%", width: "95%" }} spacing={2}>
        <CardActionArea sx={hookBoxStyle}>
          <Typography color="white" sx={{ fontSize: 70, fontWeight: 600 }}>
            Explorez ma forge numérique polyvalente.
          </Typography>
          <Stack
            direction="row"
            mt="20"
            spacing={2}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            {arrowDropDownCircleIcons}
          </Stack>
        </CardActionArea>
        <Stack sx={{ width: "50%", height: "60%" }} spacing={2}>
          <CardActionArea sx={SkillBoxStyle}>
            <Stack direction="row" spacing={10}>
              <CategoryIcon style={{ width: 80, height: 80 }} />
              <Typography
                color={palette.light.black}
                sx={{ fontSize: 40, fontWeight: 600 }}
              >
                Software Development
              </Typography>
            </Stack>
          </CardActionArea>
          <CardActionArea sx={SkillBoxStyle}>
            <Stack direction="row" spacing={10}>
              <WebIcon style={{ width: 80, height: 80 }} />
              <Typography
                color={palette.light.black}
                sx={{ fontSize: 40, fontWeight: 600 }}
              >
                Web Development
              </Typography>
            </Stack>
          </CardActionArea>
        </Stack>
      </Stack>
    </Box>
  );
}
