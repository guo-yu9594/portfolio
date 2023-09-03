"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, SxProps } from "@mui/material";
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";
import React, { CSSProperties, useEffect, useState } from "react";
import { palette } from "@/app/theme";

const mainBoxStyle: SxProps = {
  width: "100vw",
  height: { xs: "250px", sm: "315px" },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const slideStyle: CSSProperties = {
  borderRadius: 80,
  backgroundColor: palette.light.darkGrey,
  objectFit: "contain",
  width: "auto",
  height: "150px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const slideImgs = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
  "https://i.pinimg.com/originals/6d/b1/59/6db159df526b6f5584902ebc21daca88.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
  "https://cdn.buttercms.com/2q5r816LTo2uE9j7Ntic",
  "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
];

const breakpoints = [
  { minWidth: 1536, nbSlides: 6 },
  { minWidth: 1200, nbSlides: 5 },
  { minWidth: 900, nbSlides: 4 },
  { minWidth: 600, nbSlides: 3 },
  { minWidth: 0, nbSlides: 2 },
]; // based on Mui breakpoints

const HomeStep3: React.FC = (): JSX.Element => {
  const [slidesPerView, setSlidePerView] = useState(6);

  useEffect(() => {
    const handleResize = (): void => {
      for (const point of breakpoints) {
        if (window.innerWidth > point.minWidth) {
          setSlidePerView(point.nbSlides);
          return;
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Box sx={mainBoxStyle}>
      <Swiper
        style={{ width: "100%" }}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        mousewheel={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation, Mousewheel]}
      >
        {slideImgs.map((slide) => {
          return (
            <SwiperSlide key={slide} style={slideStyle}>
              <img
                style={{ objectFit: "contain", width: "100px", height: "auto" }}
                src={slide}
                alt="Logo"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default HomeStep3;
