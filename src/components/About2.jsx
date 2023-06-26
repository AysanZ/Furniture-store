import React from "react";
import { motion } from "framer-motion";
import { features } from "../Data";

const About2 = () => {
  const { title, subtitle, image } = features.feature2;
  return (
    <section className="section p-14 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[100px] items-center gap-20">
          <motion.div
            initial={{ x: "-7rem", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex-1 flex flex-col justify-end lg:gap-11 gap-8"
          >
            <h2 className="title sm:text-3xl text-2xl font-bold lg:text-2xl  mb-3">
              {" "}
              {title}{" "}
            </h2>
            <p className="subtitle "> {subtitle} </p>
          </motion.div>
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <img src={image.type} alt="" style={{ width: "530px" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About2;
