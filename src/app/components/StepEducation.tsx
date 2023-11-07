"use client";

import {
  Box,
  CardActionArea,
  Collapse,
  SxProps,
  Typography,
} from "@mui/material";
import { palette, style } from "@/components/ThemeRegistry/theme";
import { useEffect, useState } from "react";

const mainBoxStyle: SxProps = {
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  mb: "5vh",
};

const educationBoxStyle: SxProps = {
  width: "100%",
  bgcolor: palette.light.darkGrey,
  display: "flex",
  flexDirection: {lg: "row", xs: "column-reverse"},
  borderRadius: style.borderRadius,
  cursor: "default",
  "&:hover": {
    opacity: 1,
  },
};

const educationTextBoxStyle: SxProps = {
  width: {lg: "65%", xs: "90%"},
  height: "100%",
  bgcolor: palette.light.darkGrey,
  borderRadius: style.borderRadius,
  px: {xs: 3, sm: 7},
  py: 7,
};

const educationLogoBoxStyle: SxProps = {
  width: {lg: "35%", xs: "100%"},
  height: "100%",
  bgcolor: palette.light.primary,
  borderRadius: style.borderRadius,
  display: "flex",
  p: 7,
  alignItems: "center",
  justifyContent: "center",
};

const StepEducation: React.FC = (): JSX.Element => {
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
    const checkDisplayCond = () => {
      if (isDisplay === false && window.scrollY >= 570) setIsDisplay(true);
      else if (isDisplay === true && window.scrollY < 570) setIsDisplay(false);
    };
    checkDisplayCond();
    window.addEventListener("scroll", checkDisplayCond);
  }, [isDisplay]);

  return (
    <Box sx={mainBoxStyle}>
      <Collapse
        in={isDisplay}
        sx={{ width: '95%'}}
      >
        <CardActionArea sx={educationBoxStyle}>
          <Box sx={educationTextBoxStyle}>
            <Typography color="primary" fontSize={40} fontWeight={600}>
              Formé dans l'école de l'expertise informatique
            </Typography>
            <br />
            <Typography color="primary" fontSize={{xs: 20, sm: 25}} fontWeight={300}>
              Déjà doté d'un Bachelor d'excellence d'Epitech en poche, je trace
              maintenant ma voie vers le niveau de compétence supérieur en tant
              qu'étudiant en Master. Mon parcours m'a conduit à maîtriser les
              fondements du développement au sein de cette institution d'expert,
              et mon portfolio reflète avec éloquence l'épanouissement constant
              de ces compétences, forgées au cœur de l'excellence qu'offre
              Epitech.
            </Typography>
          </Box>
          <Box sx={educationLogoBoxStyle}>
            <img
              style={{ objectFit: "contain", width: "80%", height: "auto" }}
              alt="epitech-logo"
              src="https://newsroom.ionis-group.com/wp-content/uploads/2021/11/LOGO-EPITECH-BASELINE-ANGLAIS-NOIR-2021.png"
            ></img>
          </Box>
        </CardActionArea>
      </Collapse>
    </Box>
  );
}

export default StepEducation;
