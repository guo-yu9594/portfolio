"use client";

import { useRef } from "react";
import StepHome from "./components/StepHome";
import StepIntro from "./components/StepIntro";
import StepTech from "./components/StepTech";
import StepEducation from "./components/StepEducation";
import StepExperiences from "./components/StepExperiences";
import StepProjects from "./components/StepProjects";
import StepContact from "./components/StepContact";
import { Box, Toolbar } from "@mui/material";
import { palette } from "@/components/ThemeRegistry/theme";
import NavBar from "./components/NavBar";

const HomePage: React.FC = (): JSX.Element => {
  const stepHomeRef = useRef<HTMLDivElement>(null);
  const stepEducationRef = useRef<HTMLDivElement>(null);
  const stepTechRef = useRef<HTMLDivElement>(null);
  const stepExperiencesRef = useRef<HTMLDivElement>(null);
  const stepProjectsRef = useRef<HTMLDivElement>(null);
  const stepContactRef = useRef<HTMLDivElement>(null);

  const handleScroll = (title: string) => {
    if (title === "Accueil")
      stepHomeRef.current?.scrollIntoView({ behavior: "smooth" });
    if (title === "Tech")
      stepTechRef.current?.scrollIntoView({ behavior: "smooth" });
    if (title === "Éducation")
      stepEducationRef.current?.scrollIntoView({ behavior: "smooth" });
    if (title === "Expériences")
      stepExperiencesRef.current?.scrollIntoView({ behavior: "smooth" });
    if (title === "Projets")
      stepProjectsRef.current?.scrollIntoView({ behavior: "smooth" });
    if (title === "Contact")
      stepContactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar handleScroll={handleScroll} />
      <Box component="main" sx={{ backgroundColor: palette.light.bg }}>
        <Toolbar />
        <div ref={stepHomeRef}>
          <StepHome />
        </div>
        <StepIntro handleScroll={() => handleScroll("Tech")} />
        <div ref={stepTechRef}>
          <StepTech />
        </div>
        <div ref={stepEducationRef}>
          <StepEducation />
        </div>
        <div ref={stepExperiencesRef}>
          <StepExperiences />
        </div>
        <div ref={stepProjectsRef}>
          <StepProjects />
        </div>
        <div ref={stepContactRef}>
          <StepContact />
        </div>
      </Box>
    </Box>
  );
};

export default HomePage;
