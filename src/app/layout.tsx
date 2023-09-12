"use client";

import Link from "next/link";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { ReactNode } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "@/app/theme";
import { CssBaseline } from "@mui/material";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Portfolio d'un freelance Software Engineer junior. Découvrez mes projets et compétences en développement logiciel."
        />
        <meta name="author" content="Guo YU" />
        <title>Guo YU - Software Engineer Portfolio</title>
      </head>
      <body>
        <ThemeRegistry>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
