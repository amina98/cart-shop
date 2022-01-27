import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { CartContext } from "../../context/CartContextProvider";
import shopIcon from "../../assets/icon/shop.svg";

const Navbar = () => {
    const history = useHistory();
    const { state, dispatch } = useContext(CartContext);
    return (
        <div
            className="navbar navbar-light bg-body shadow position-sticky top-0"
            style={{ zIndex: "300", height: "75px" }}
        >
            <div className="container mt-2">
                <ul className="nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className="nav-link active border-bottom h5"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/products"
                            className="nav-link border-bottom h5"
                        >
                            products
                        </Link>
                    </li>
                </ul>
                <div className="d-flex justify-content-start align-items-center">
                    <div className="me-3">
                        {state.token == "" ? (
                            <Link to="/auth" className="text-decoration-none">
                                <span className="fs-6 text-decoration-none">
                                    Login / Regester
                                </span>
                            </Link>
                        ) : (
                            <NavDropdown title="Dashboard" menuVariant="light">
                                <NavDropdown.Item>
                                    <Link to="/">profile</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => {
                                        dispatch({ type: "LOGOUT" });
                                        history.push("/");
                                    }}
                                >
                                    log out
                                </NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </div>
                    <div className="position-relative">
                        <Link to="/cart">
                            <img
                                className="img-fluid"
                                src={shopIcon}
                                alt="shop"
                            />
                        </Link>
                        <span className="badge bg-primary position-absolute top-0 start-50 rounded-circle">
                            {state.itemCounter}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
