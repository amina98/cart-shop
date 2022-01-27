import React, { createContext, useEffect, useState } from "react";
import { productsList } from "../components/dummyData";

//Api
import { getProduct } from "../services/api";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // const fetchApi = async()=>{
        //     setProducts(await getProduct());
        //     console.log('productContextRendered');
        // }
        // fetchApi();
        setProducts(productsList);
    }, []);

    return (
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
