import React, { Children } from "react";

import { useState, useEffect, createContext } from "react";

import { productData } from "../Data";

export const ProductContext = createContext();

const ContextProvider = ({ Children }) => {
  return (
    <ProductContext.Provider value={console.log("this is the c")}>
      {Children}
    </ProductContext.Provider>
  );
};

export default ContextProvider;
