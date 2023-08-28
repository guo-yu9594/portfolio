"use client";

import { Box, CardActionArea, SxProps, Typography } from "@mui/material";
import { palette } from "../layout";

const mainBoxStyle: SxProps = {
  width: "100vw",
  height: "40vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mb: "5vh",
};

const educationBoxStyle: SxProps = {
  width: "95%",
  height: "95%",
  bgcolor: palette.light.darkGrey,
  display: "flex",
  flexDirection: "row",
  borderRadius: 25,
};

const educationTextBoxStyle: SxProps = {
  width: "65%",
  height: "100%",
  bgcolor: palette.light.darkGrey,
  borderRadius: 25,
  p: 7,
};

const educationLogoBoxStyle: SxProps = {
  width: "35%",
  height: "100%",
  bgcolor: palette.light.primary,
  borderRadius: 25,
  display: "flex",
  p: 7,
  alignItems: "center",
  justifyContent: "center",
};

export default function HomeStep4(): JSX.Element {
  return (
    <Box sx={mainBoxStyle}>
      <CardActionArea sx={educationBoxStyle}>
        <Box sx={educationTextBoxStyle}>
          <Typography color="primary" fontSize={40} fontWeight={600}>
            Formé dans l'école de l'expertise informatique
          </Typography>
          <br />
          <Typography color="primary" fontSize={25} fontWeight={300}>
            Déjà doté d'un Bachelor d'excellence d'Epitech en poche, je trace
            maintenant ma voie vers le niveau de compétence supérieur en tant
            qu'étudiant en Master. Mon parcours m'a conduit à maîtriser les
            fondements du développement au sein de cette institution
            d'expert, et mon portfolio reflète avec éloquence
            l'épanouissement constant de ces compétences, forgées au cœur de
            l'excellence qu'offre Epitech.
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
    </Box>
  );
}
