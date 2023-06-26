import React from "react";
import { motion } from "framer-motion";
import { features } from "../Data";

const About = () => {
  const { title, subtitle, image, buttonText, items } = features;
  return (
    <section className="section p-14 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[100px] items-center gap-20">
          <motion.div
            initial={{ x: "-7rem", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex-1 order-1 lg:-order-1  "
          >
            <img src={image.type} alt="" style={{ width: "530px" }} />
          </motion.div>
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex-1 flex flex-col justify-end lg:gap-11 gap-8"
          >
            <h2 className="title sm:text-3xl text-2xl font-bold lg:text-2xl mb-3">
              {" "}
              {title}{" "}
            </h2>
            <p className="subtitle "> {subtitle} </p>
            <div>
              {items.map((item, index) => {
                const { title, subtitle, icon } = item;
                return (
                  <div className="flex mb-6 lg:last:mb-0 ">
                    <div className="text-2xl mr-4 lg:text-3xl "> {icon} </div>
                    <div>
                      <h4 className=" text-xl lg:text-xl font-semibold mb-3">
                        {" "}
                        {title}{" "}
                      </h4>
                      <p>{subtitle} </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
