import React from "react";
import { newInStrore } from "../Data";
import Slider from "./Slider";

const Category = () => {
  const { title, subtitle, link, icon } = newInStrore;
  return (
    <section className="section p-14 pb-48 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0">
            <h2 className="title sm:text-3xl text-2xl font-bold lg:text-2xl mb-3 max-w-[245px] lg:mt-[30px] lg:mb-[50px] ">
              {title}{" "}
            </h2>
            <p className="max-w-[245px] lg:mb-12 ">{subtitle} </p>
            <div className="hidden lg:flex items-center">
              <a
                href="#"
                className="hover:border-b border-primary lg:items-center font-medium transition-all"
              >
                {" "}
                {link}
              </a>
              <div className="text-3xl">{icon} </div>
            </div>
          </div>
          <div className="lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24 ">
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
