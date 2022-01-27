import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContextProvider";

const ProductDetails = (props) => {
    const id = props.match.params.id;
    const data = useContext(ProductContext);
    const product = data[id - 1];
    return (
        <div className="container">
            <div className="row border rounded mx-1 mx-sm-0 my-4">
                <div className="col-12 col-lg-6 d-flex justify-content-center px-5 py-5">
                    <img
                        className="img-fluid w-75"
                        src={product.image}
                        alt="product"
                    />
                </div>
                <div className="col-12 col-lg-6 p-3 d-flex align-items-center">
                    <div className=" border rounded p-3">
                        <h3 className="card-title">{product.title}</h3>
                        <hr />
                        <p className="card-text">{product.description}</p>
                        <p className="card-text fw-bold">
                            <span className="text-primary">Category: </span>
                            {product.category}
                        </p>
                        <div className="d-flex justify-content-between">
                            <span className="badge bg-secondary d-flex align-items-center justify-content-center">
                                {product.price} $
                            </span>
                            <Link className="btn btn-primary" to="/products">
                                back to shop
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
