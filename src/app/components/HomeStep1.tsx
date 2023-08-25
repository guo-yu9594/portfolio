"use client";

import { Stack, Typography } from "@mui/material";
import { palette } from "@/app/layout";

export default function HomeStep1(): JSX.Element {
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
      <Typography sx={{ color: "white", fontWeight: 800, fontSize: "5rem" }}>
        GUO YU
      </Typography>
      <Typography
        sx={{ color: palette.light.primary, fontWeight: 300, fontSize: "3rem" }}
      >
        Freelance software engineer
      </Typography>
    </Stack>
  );
}
