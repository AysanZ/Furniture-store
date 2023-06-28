import React from "react";
import { productData } from "../data";

import ProductSlider from "./ProductSlider";

const Products = () => {
  const { title, subtitle } = productData;

  return (
    <section className="section p-14 text-center">
      <div className="container mx-auto ">
        <div>
          <h2 className="text-2xl lg:text-[58px] font-semibold mb-12 text-primary">
            {title}
          </h2>
          <p className="max-w-[639px] mx-auto mb-[50px] lg:mb-[70px] ">
            {subtitle}{" "}
          </p>
        </div>
        <ProductSlider />
      </div>
    </section>
  );
};

export default Products;
