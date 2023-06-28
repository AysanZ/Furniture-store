import React from "react";
import CommentSlider from "./CommentSlider";
import { motion } from "framer-motion";
import { testimonial } from "../Data";

const Comments = () => {
  const { image, title } = testimonial;
  return (
    <section className="section p-14 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-2">
          <div className="lg:max-w-[50%]">
            <h2 className="title sm:text-3xl text-2xl font-bold lg:text-2xl mb-9">
              {title}{" "}
            </h2>
            <CommentSlider />
          </div>
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="order-1"
          >
            <img src={image.type} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
