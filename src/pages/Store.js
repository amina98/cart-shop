import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContextProvider";
import Products from "../components/Products";

const Store = () => {
    const products = useContext(ProductContext);
    console.log(products);
    return (
        <div className="container">
            <div className="row">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="col-12 col-md-6 col-lg-4 col-xl-3 pt-4"
                    >
                        <Products key={product.id} data={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;
