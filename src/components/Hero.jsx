import React from "react";
import Image from "../assets/img/hero.png";

const Hero = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24 mt-10 ">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 ">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-normal mb-6">
            Enjoy Your Dream <span className="text-primary">Furniture</span>
          </h1>
          <p className=" max-w-[480px] mb-8 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            cupiditate officiis possimus aperiam, aliquam voluptas ipsam
            doloremque necessitatibus inventore ad.
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end ">
          <img
            src={Image}
            alt=""
            style={{ width: "530px" }}
            className="mr-36"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
