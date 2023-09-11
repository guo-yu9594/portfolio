"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import StepHome from "./components/StepHome";
import StepIntro from "./components/StepIntro";
import StepTech from "./components/StepTech";
import StepEducation from "./components/StepEducation";
import StepExperiences from "./components/StepExperiences";
import StepProjects from "./components/StepProjects";
import StepContact from "./components/StepContact";

const HomePage = forwardRef((props, ref) => {
  const stepHomeRef = useRef<HTMLDivElement>(null);
  const stepEducationRef = useRef<HTMLDivElement>(null);
  const stepTechRef = useRef<HTMLDivElement>(null);
  const stepExperiencesRef = useRef<HTMLDivElement>(null);
  const stepProjectsRef = useRef<HTMLDivElement>(null);
  const stepContactRef = useRef<HTMLDivElement>(null);
  const scrollToTech = () => {
    stepTechRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useImperativeHandle(ref, () => ({
    handleScroll(title: string) {
      if (title === "Accueil")
        stepHomeRef.current?.scrollIntoView({ behavior: "smooth" });
      if (title === "Éducation")
        stepEducationRef.current?.scrollIntoView({ behavior: "smooth" });
      if (title === "Expériences")
        stepExperiencesRef.current?.scrollIntoView({ behavior: "smooth" });
      if (title === "Projets")
        stepProjectsRef.current?.scrollIntoView({ behavior: "smooth" });
      if (title === "Contact")
        stepContactRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  return (
    <>
      <div ref={stepHomeRef}>
        <StepHome />
      </div>
      <StepIntro handleScroll={scrollToTech} />
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
    </>
  );
});

export default HomePage;
