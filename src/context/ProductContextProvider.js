import React, { createContext, useEffect, useState } from 'react';


//Api
import { getProduct } from '../services/api';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchApi = async()=>{
            setProducts(await getProduct());
            console.log('productContextRendered');
        }
        fetchApi();
    }, [])

    return (
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;