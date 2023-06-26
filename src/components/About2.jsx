import React from 'react'
import {features} from '../Data'

const About2 = () => {
    const {title, subtitle, image} = features.feature2;
  return (
    <section className="section mb-44">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[100px] items-center">
          <div className="flex-1 flex flex-col justify-end lg:gap-11">
            <h2 className="title text-base lg:text-2xl font-semibold mb-3">
              {" "}
              {title}{" "}
            </h2>
            <p className="subtitle "> {subtitle} </p>
        
          </div>
          <div>
            <img src={image.type} alt="" style={{ width: "530px" }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About2