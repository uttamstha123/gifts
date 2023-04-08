import { createContext } from "react";
import { productList } from "./components/home1/components/productItem/productList";
export const ProductContext = createContext();

export const ProductProvider = (props) => {
  return (
    <ProductContext.Provider value={productList}>
      {props.children}
    </ProductContext.Provider>
  );
};
