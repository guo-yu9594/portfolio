"use client";

import WebIcon from "@mui/icons-material/Web";
import CategoryIcon from "@mui/icons-material/Category";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { CSSProperties, MutableRefObject, useEffect, useState } from "react";
import { palette, style } from "@/components/ThemeRegistry/theme";
import {
  Box,
  CardActionArea,
  Grow,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";

const mainBoxStyle: SxProps = {
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const hookBoxStyle: SxProps = {
  bgcolor: palette.light.primary,
  width: { xs: "100%", lg: "50%" },
  height: { xs: "fit-content", sm: "565px" },
  borderRadius: style.borderRadius,
  p: { xs: 5, sm: 7 },
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const SkillBoxStyle: SxProps = {
  bgcolor: palette.light.darkGrey,
  width: "100%",
  height: "50%",
  borderRadius: style.borderRadius,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const SkillBoxTextStyle: SxProps = {
  color: palette.light.primary,
  fontSize: { xs: 25, sm: 40 },
  fontWeight: 600,
  textAlign: "center",
};

const generateArrowDropDownIcons = (count: number, style: CSSProperties) => {
  const icons = [];
  for (let i = 0; i < count; i++) {
    icons.push(<ArrowDropDownCircleIcon key={i} style={style} />);
  }
  return icons;
};

const breakpoints = [
  { minWidth: 1536, nbIcons: 6 },
  { minWidth: 1200, nbIcons: 5 },
  { minWidth: 900, nbIcons: 9 },
  { minWidth: 600, nbIcons: 6 },
  { minWidth: 400, nbIcons: 4 },
  { minWidth: 0, nbIcons: 3 },
]; // based on Mui breakpoints

interface StepIntroProps {
  handleScroll?: () => void;
}

const StepIntro: React.FC<StepIntroProps> = ({ handleScroll }): JSX.Element => {
  const [nbIcons, setNbIcons] = useState(6);
  const arrowDropDownCircleIcons = generateArrowDropDownIcons(nbIcons, {
    width: 80,
    height: 80,
    color: palette.light.bg,
  });

  const [skill1Display, setSkill1Display] = useState(false);
  const [skill2Display, setSkill2Display] = useState(false);

  useEffect(() => {
    const handleResize = (): void => {
      for (const point of breakpoints) {
        if (window.innerWidth > point.minWidth) {
          setNbIcons(point.nbIcons);
          return;
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      if (skill1Display === false) setSkill1Display(true);
      if (skill1Display === true) setSkill2Display(true);
    }, 150);
  });

  return (
    <Box sx={mainBoxStyle}>
      <Stack
        direction={{ lg: "row", xs: "column" }}
        sx={{ width: "95%" }}
        spacing={2}
      >
        <Grow in={true}>
          <CardActionArea sx={hookBoxStyle} onClick={handleScroll}>
            <Typography
              color={palette.light.bg}
              sx={{
                fontSize: { xs: 40, sm: 70 },
                fontWeight: 600,
                mb: { xs: "50px", sm: 0 },
              }}
            >
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
        </Grow>
        <Stack
          sx={{ width: { xs: "100%", lg: "50%" }, height: "565px" }}
          spacing={2}
        >
          <Grow in={skill1Display}>
            <CardActionArea sx={SkillBoxStyle} onClick={handleScroll}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ lg: 10, xs: 3 }}
                sx={{ alignItems: { xs: "center", lg: "normal" } }}
              >
                <CategoryIcon color="primary" sx={{ width: 80, height: 80 }} />
                <Typography sx={SkillBoxTextStyle}>
                  Développement logiciel
                </Typography>
              </Stack>
            </CardActionArea>
          </Grow>
          <Grow in={skill2Display}>
            <CardActionArea sx={SkillBoxStyle} onClick={handleScroll}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ lg: 10, xs: 3 }}
                sx={{ alignItems: { xs: "center", lg: "normal" } }}
              >
                <WebIcon color="primary" sx={{ width: 80, height: 80 }} />
                <Typography sx={SkillBoxTextStyle}>Développement web</Typography>
              </Stack>
            </CardActionArea>
          </Grow>
        </Stack>
      </Stack>
    </Box>
  );
};

export default StepIntro;
