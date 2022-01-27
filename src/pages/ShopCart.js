import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { notify } from "react-notify-toast";

//context
import { CartContext } from "../context/CartContextProvider";
// components
import Cart from "../components/Cart";

const ShopCart = () => {
    const history = useHistory();
    const { state, dispatch } = useContext(CartContext);
    return (
        <div className="min-vh-100 bg-light">
            <div className="container mb-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-9">
                        {state.selectedItem.map((item) => (
                            <Cart key={item.id} data={item} />
                        ))}
                    </div>
                    <div className="col-12 col-lg-3">
                        {state.itemCounter > 0 && (
                            <div className="bg-body border shadow borer-2 mt-4 rounded p-4">
                                <div className="fw-bold ">
                                    <span className="text-primary">
                                        total item:{" "}
                                    </span>
                                    {state.itemCounter}
                                </div>
                                <div className="fw-bold ">
                                    <span className="text-primary">
                                        total payment:{" "}
                                    </span>{" "}
                                    {state.total} $
                                </div>
                                <div className="d-flex justify-content-between mt-5">
                                    <button
                                        className="btn btn-outline-success"
                                        onClick={() =>
                                            dispatch({ type: "CLEAR" })
                                        }
                                    >
                                        Clear
                                    </button>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => {
                                            if (state.token !== "") {
                                                dispatch({ type: "CHECKOUT" });
                                            } else {
                                                history.push("/auth");
                                                notify.show(
                                                    "You must log in before checkout",
                                                    "warning",
                                                    2000
                                                );
                                            }
                                        }}
                                    >
                                        check out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    {state.checkout && (
                        <div className="col-12 col-md-5 mt-5 border bg-body shadow p-4">
                            <h3 className="text-center">
                                you chechout succesfully
                            </h3>
                            <Link
                                className="btn btn-primary mt-5 w-100"
                                to="/products"
                            >
                                Buy More
                            </Link>
                        </div>
                    )}
                    {!state.checkout && state.itemCounter === 0 && (
                        <div className="col-12 col-md-5 mt-5 border bg-body shadow p-4">
                            <h3 className="text-center">want to buy?</h3>
                            <Link
                                className="btn btn-primary mt-5 w-100"
                                to="/products"
                            >
                                Go to Shop
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShopCart;
