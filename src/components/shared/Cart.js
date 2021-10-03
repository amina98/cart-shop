import React from "react";
import { useContext } from "react";

//context
import { CartContext } from "../../context/CartContextProvider";

//functions
import { shorten } from "../../helper/functhens";
//icons
import trashIcon from "../../assets/icon/trash.svg";

const Cart = (props) => {
    const { dispatch } = useContext(CartContext);
    const { image, title, price, quantity } = props.data;
    return (
        <div className="bg-body mt-4 mx-lg-4">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between p-2 rounded border-2 shadow border">
                <img
                    className="img-fluid mb-3 mb-lg-0 ms-lg-3"
                    style={{ width: "100px", height: "100px" }}
                    src={image}
                    alt="product"
                />
                <div className="mb-3 mb-lg-0 text-center">
                    <h3 className="text-primary">{shorten(title)}</h3>
                    <span className="badge bg-secondary fs-6">{price} $</span>
                </div>
                <span className="fs-5 badge bg-warning d-none d-lg-block">
                    {quantity}
                </span>
                <div className="d-flex">
                    {quantity > 1 ? (
                        <button
                            className="btn btn-primary"
                            onClick={() =>
                                dispatch({
                                    type: "DECREASE",
                                    payload: props.data,
                                })
                            }
                        >
                            <i className="fas fa-minus"></i>
                        </button>
                    ) : (
                        <button
                            className="btn btn-primary"
                            onClick={() =>
                                dispatch({
                                    type: "REMOVE_ITEM",
                                    payload: props.data,
                                })
                            }
                        >
                            <i className="fas fa-trash"></i>
                        </button>
                    )}
                    <span className="fs-5 badge bg-warning ms-3 d-block d-lg-none">
                        {quantity}
                    </span>

                    {
                        <button
                            className="btn btn-primary ms-3"
                            onClick={() =>
                                dispatch({
                                    type: "INCREASE",
                                    payload: props.data,
                                })
                            }
                        >
                            <i className="fas fa-plus"></i>
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;
