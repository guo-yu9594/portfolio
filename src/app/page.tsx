"use client";

import { useRef } from "react";
import HomeStep1 from "./components/HomeStep1";
import HomeStep2 from "./components/HomeStep2";
import HomeStep3 from "./components/HomeStep3";
import HomeStep4 from "./components/HomeStep4";
import HomeStep5 from "./components/HomeStep5";
import HomeStep6 from "./components/HomeStep6";
import HomeStep7 from "./components/HomeStep7";

const HomePage: React.FC = (): JSX.Element => {
  const step3Ref = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    step3Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HomeStep1 />
      <HomeStep2 handleScroll={handleClick} />
      <div ref={step3Ref}>
        <HomeStep3 />
      </div>
      <HomeStep4 />
      <HomeStep7 />
      <HomeStep5 />
      <HomeStep6 />
    </>
  );
};

export default HomePage;
