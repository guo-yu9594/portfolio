"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, SxProps } from "@mui/material";
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";
import { CSSProperties } from "react";
import { palette } from "../layout";

const mainBoxStyle: SxProps = {
  width: "100vw",
  height: "30vh",
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

export default function HomeStep3(): JSX.Element {
  return (
    <Box sx={mainBoxStyle}>
      <Swiper
        style={{ width: '100%' }}
        spaceBetween={50}
        slidesPerView={6}
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
}
