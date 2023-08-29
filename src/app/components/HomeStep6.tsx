"use client";

import {
  Alert,
  Box,
  Button,
  Collapse,
  Fade,
  Popper,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import { palette } from "@/app/theme";
import { MouseEvent, useEffect, useState } from "react";

const mainBoxStyle: SxProps = {
  width: "100vw",
  height: "50vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mb: "5vh",
};

const contactBoxStyle: SxProps = {
  width: "100%",
  height: "95%",
  bgcolor: palette.light.darkGrey,
  borderRadius: 25,
  alignItems: "center",
  justifyContent: "center",
};

const titleBoxStyle: SxProps = {
  width: "60%",
  height: "100%",
  display: "flex",
  p: 8,
  alignItems: "center",
  justifyContent: "center",
};

const contactFormStyle: SxProps = {
  width: "40%",
  height: "100%",
  p: 8,
  alignItems: "center",
  bgcolor: palette.light.primary,
  borderRadius: 25,
};

const contactInfoStyle: SxProps = {
  width: "fit-content",
  height: "fit-content",
  p: 2,
  borderRadius: 25,
  fontSize: 25,
  color: "black",
  borderColor: "black",
  border: 2,
  "&:hover": {
    borderColor: "black",
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

export default function HomeStep6(): JSX.Element {
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
      if (isDisplay === false && window.scrollY >= 1550) setIsDisplay(true);
      else if (isDisplay === true && window.scrollY < 1550) setIsDisplay(false);
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
        <Stack sx={contactBoxStyle} direction="row">
          <Stack sx={contactFormStyle} direction="column" spacing={3}>
            <Typography color="black" fontSize={55} fontWeight={800}>
              Contact
            </Typography>
            <Stack direction="row" spacing={2}>
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
              {linkedin}
            </Button>
          </Stack>
          <Box sx={titleBoxStyle}>
            <Typography color="primary" fontWeight={800} fontSize={65}>
              Donnez vie à vos idées avec des solutions numériques sur mesure !
            </Typography>
          </Box>
        </Stack>
      </Collapse>
    </Box>
  );
}