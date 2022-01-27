import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import { isInCart, shorten, quantityCount } from "../helper/functhens";

const Products = ({ data }) => {
    const { state, dispatch } = useContext(CartContext);
    return (
        <div className="card mb-2">
            <img
                className="card-img-top mx-auto mt-2"
                src={data.image}
                alt="product"
                style={{ width: "230px", height: "200px" }}
            />
            <div className="card-body">
                <p className="card-title fw-bold fs-4">{shorten(data.title)}</p>
                <p className="card-text badge bg-secondary fs-6">
                    {data.price} $
                </p>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <Link
                    to={`/products/${data.id}`}
                    className="text-decoration-none text-info"
                >
                    Details
                </Link>
                <div>
                    {isInCart(state, data.id) ? (
                        <button
                            className="btn btn-sm btn-primary"
                            onClick={() =>
                                dispatch({
                                    type: "INCREASE",
                                    payload: data,
                                })
                            }
                        >
                            <i className="fas fa-plus"></i>
                        </button>
                    ) : (
                        <button
                            className="btn btn-sm btn-primary"
                            onClick={() =>
                                dispatch({
                                    type: "ADD_ITEM",
                                    payload: data,
                                })
                            }
                        >
                            Add to cart
                        </button>
                    )}

                    {quantityCount(state, data.id) > 0 && (
                        <span className="text-primary fs-6 badge">
                            {quantityCount(state, data.id)}
                        </span>
                    )}

                    {quantityCount(state, data.id) > 1 && (
                        <button
                            className="btn btn-sm btn-secondary"
                            onClick={() =>
                                dispatch({
                                    type: "DECREASE",
                                    payload: data,
                                })
                            }
                        >
                            <i className="fas fa-minus"></i>
                        </button>
                    )}

                    {quantityCount(state, data.id) === 1 && (
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() =>
                                dispatch({
                                    type: "REMOVE_ITEM",
                                    payload: data,
                                })
                            }
                        >
                            <i className="fas fa-trash"></i>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
