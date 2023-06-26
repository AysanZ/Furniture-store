import React from "react";
import Image from "../assets/img/hero.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-full max-h-[640px] mb-20 xl:mb-48 mt-14">
      <div className="flex flex-col lg:flex-row">
        <motion.div
          initial={{ x: "-7rem", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 "
        >
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-normal mb-6">
            Enjoy Your Dream <span className="text-primary">Furniture</span>
          </h1>
          <p className=" max-w-[480px] mb-8 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            cupiditate officiis possimus aperiam, aliquam voluptas ipsam
            doloremque necessitatibus inventore ad.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "7rem", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="hidden flex-1 lg:flex justify-end items-end "
        >
          <img
            src={Image}
            alt=""
            style={{ width: "530px" }}
            className="mr-36"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
