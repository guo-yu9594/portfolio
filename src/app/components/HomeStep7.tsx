"use client";

import { Box, Stack, SxProps } from "@mui/material";
import { palette, style } from "@/app/theme";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const mainBoxStyle: SxProps = {
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  mb: "5vh",
};

const bodyBoxStyle: SxProps = {
  width: "95%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const accordionSummaryStyle: SxProps = {
  minHeight: "100px",
  height: "auto",
  bgcolor: palette.light.primary,
  color: "black",
  px: 5,
  borderRadius: style.borderRadius.xs,
};

const accordionDetailsStyle: SxProps = {
  mt: 2,
  minHeight: "200px",
  height: "auto",
  bgcolor: palette.light.darkGrey,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  color: palette.light.primary,
  borderRadius: style.borderRadius.xs,
  py: 7,
  pl: 7,
  paddingRight: 0,
};

const experiences: any[] = [
  {
    title: "Full Stack Developer",
    contract: "Stage",
    company: "Smice",
    link: "https://smice.com/",
    logo: "https://smice.com/wp-content/uploads/2023/04/logo_smice_V3.png.webp",
    period: "07/2021 - 12/2021 · 6 mois",
    description:
      "Enrichissement de la plateforme Smice en intégrant de nouvelles fonctionnalités et en optimisant l'expérience utilisateur.",
  },
  {
    title: "Teaching Assistant",
    contract: "Stage",
    company: "Epitech",
    link: "https://www.epitech.eu/",
    logo: "https://newsroom.ionis-group.com/wp-content/uploads/2021/11/LOGO-EPITECH-BASELINE-ANGLAIS-BLANC-2021.png",
    period: "02/2022 - 07/2022 · 6 mois",
    description:
      "Soutien technique aux étudiants de première année, enseignant à la fois la théorie et la pratique, évaluant les projets et les présentations, et organisant et supervisant des cours, des activités et des ateliers éducatifs.",
  },
  {
    title: "Software Developer",
    contract: "Stage",
    company: "Yellow",
    link: "https://www.getyellow.io/",
    logo: "https://www.getyellow.io/images/yellow-logo.png",
    period: "10/2022 - 03/2023 · 6 mois",
    description:
      "Contribution au développement de nouveaux composants logiciels web tout en collaborant à la recherche technique et architecturale afin de découvrir des solutions innovantes et efficientes.",
  },
  {
    title: "Front-end Engineer",
    contract: "Stage",
    company: "Smice",
    link: "https://smice.com/",
    logo: "https://smice.com/wp-content/uploads/2023/04/logo_smice_V3.png.webp",
    period: "04/2023 - 08/2023 · 5 mois",
    description:
      "Impliquation dans la refonte de la plateforme web Smice en adoptant de nouvelles technologies pour intégrer les mises à jour de chaque page et fonctionnalité par rapport à la version précédente.",
  },
];

const HomeStep7: React.FC = (): JSX.Element => {
  return (
    <Box sx={mainBoxStyle}>
      <Box sx={bodyBoxStyle}>
        <Box sx={{ width: "45%" }}>
          <Typography color="primary" fontSize={80} fontWeight={900}>
            Expériences professionnelles
          </Typography>
        </Box>
        <Stack sx={{ width: "55%" }}>
          {experiences.map((experience) => {
            return (
              <Accordion sx={{ bgcolor: "transparent" }}>
                <AccordionSummary
                  sx={accordionSummaryStyle}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography fontWeight={800} fontSize={30}>
                    {experience.title + " @" + experience.company}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={accordionDetailsStyle}>
                  <Box sx={{ width: "60%" }}>
                    <Typography fontWeight={800} fontSize={20} sx={{ pb: 2 }}>
                      {experience.period + " · " + experience.contract}
                    </Typography>
                    <Typography fontSize={{ xs: 20, sm: 25 }} fontWeight={300}>
                      {experience.description}
                    </Typography>
                  </Box>
                  <Box sx={{ width: "40%" }}>
                    <a
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      href={experience.link}
                      target="_blank"
                    >
                      <img
                        style={{
                          objectFit: "contain",
                          width: "60%",
                          height: "auto",
                        }}
                        alt="epitech-logo"
                        src={experience.logo}
                      ></img>
                    </a>
                  </Box>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default HomeStep7;
