import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContextProvider';
import Products from './shared/Products';

const Store = () => {
    const products = useContext(ProductContext);
    console.log("store")
    console.log(products)
    return (
        <div className="container">
            <div className="row">
            {
                products.map(product => <Products key={product.id} data={product} />)
            }
            </div>
        </div>
    );
};

export default Store;