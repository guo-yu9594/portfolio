"use client";

import {
  Box,
  Button,
  Collapse,
  Fade,
  Popper,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import { palette, style } from "@/app/theme";
import { MouseEvent, useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const mainBoxStyle: SxProps = {
  width: "100vw",
  minHeight: "50vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mb: "5vh",
};

const contactBoxStyle: SxProps = {
  width: "100%",
  bgcolor: palette.light.darkGrey,
  borderRadius: style.borderRadius,
  alignItems: "center",
  justifyContent: "center",
};

const titleBoxStyle: SxProps = {
  width: { lg: "60%", xs: "100%" },
  display: "flex",
  px: { xs: 4, sm: 8 },
  py: { xs: 5, sm: 8 },
  alignItems: "center",
  justifyContent: "center",
};

const contactFormStyle: SxProps = {
  width: { lg: "40%", xs: "100%" },
  p: { xs: 4, lg: 8 },
  alignItems: "center",
  bgcolor: palette.light.primary,
  borderRadius: style.borderRadius,
};

const contactInfoStyle: SxProps = {
  width: "fit-content",
  maxWidth: "95%",
  height: "fit-content",
  p: 2,
  borderRadius: style.borderRadius,
  color: palette.light.bg,
  fontSize: { xs: 20, sm: 22, lg: 25 },
  borderColor: palette.light.bg,
  border: 2,
  textAlign: "center",
  "&:hover": {
    borderColor: palette.light.bg,
    border: 2,
  },
};

const contactPopperStyle: SxProps = {
  p: 2,
  bgcolor: palette.light.darkGrey,
  color: palette.light.primary,
  borderRadius: 6,
  fontWeight: 500,
};

export default function StepContact(): JSX.Element {
  const mail = "guo.yu@epitech.eu";
  const mobile = "+33 7 81 35 87 13";
  const linkedin = "https://www.linkedin.com/in/guo-yu-paris/";
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const [isDisplay, setIsDisplay] = useState(false);

  const copyToClipboard = (
    event: MouseEvent<HTMLElement>,
    valueToCopy: string
  ) => {
    navigator.clipboard.writeText(valueToCopy);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  useEffect(() => {
    const checkDisplayCond = () => {
      if (isDisplay === false && window.scrollY >= 2000) setIsDisplay(true);
      else if (isDisplay === true && window.scrollY < 2000) setIsDisplay(false);
    };
    checkDisplayCond();
    window.addEventListener("scroll", checkDisplayCond);
    if (open === true)
      setTimeout(() => {
        setAnchorEl(null);
      }, 2000);
  }, [anchorEl, isDisplay]);

  return (
    <Box sx={mainBoxStyle}>
      <Collapse in={isDisplay} sx={{ width: "95%" }}>
        <Stack
          sx={contactBoxStyle}
          direction={{ lg: "row", xs: "column-reverse" }}
        >
          <Stack sx={contactFormStyle} direction="column" spacing={3}>
            <Typography color={palette.light.bg} fontSize={55} fontWeight={800}>
              Contact
            </Typography>
            <Stack
              direction={{
                xs: "column",
                sm: "row",
                md: "row",
                lg: "column",
                xl: "row",
              }}
              sx={{ alignItems: { xs: "center", lg: "start" } }}
              spacing={2}
            >
              <Button
                variant="outlined"
                sx={contactInfoStyle}
                onClick={(event) => copyToClipboard(event, mail)}
              >
                {mail}
              </Button>
              <Button
                variant="outlined"
                sx={contactInfoStyle}
                onClick={(event) => copyToClipboard(event, mobile)}
              >
                {mobile}
              </Button>
              <Popper id={id} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box sx={contactPopperStyle}>Copié !</Box>
                  </Fade>
                )}
              </Popper>
            </Stack>
            <Button
              variant="outlined"
              sx={contactInfoStyle}
              href={linkedin}
              target="_blank"
            >
              <LinkedInIcon sx={{ width: "40px", height: "40px", mr: 1 }} />
              LinkedIn
            </Button>
          </Stack>
          <Box sx={titleBoxStyle}>
            <Typography
              color="primary"
              fontWeight={800}
              fontSize={{ xs: 35, sm: 65 }}
            >
              Donnez vie à vos idées avec des solutions numériques sur mesure !
            </Typography>
          </Box>
        </Stack>
      </Collapse>
    </Box>
  );
}
