import React from "react";
import { categories } from "../Data";
import Categories from "./Categories";
import { motion } from "framer-motion";

const Value = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="section">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Why <span className="text-primary">Choose</span> Us
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          omnis autem veniam voluptatum obcaecati dolor.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-5 sm:grid-cols-2 mt-12 gap-6"
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>
    </div>
  );
};

export default Value;
