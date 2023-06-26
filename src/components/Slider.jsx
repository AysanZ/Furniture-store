import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { newInStrore } from "../Data";
import { motion } from "framer-motion";

const Slider = () => {
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidePerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidePerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {newInStrore.products.map((product, index) => {
        return (
          <SwiperSlide key={index} className="max-w-[265px] ">
            <motion.div
                   initial={{ x: "7rem", opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1}}
                   transition={{ duration: 2 }}
              className="relative"
            >
              <img src={product.image.type} alt="" />
              <div
                className="absolute text-white bottom-[20px] w-full
          text-center text-[18px] lg:text-2xl font-medium capitalize "
              >
                {product.name}{" "}
              </div>
            </motion.div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
