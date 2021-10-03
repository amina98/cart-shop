import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import shopIcon from "../../assets/icon/shop.svg";

const Navbar = () => {
    const { state } = useContext(CartContext);
    return (
        <div className="navbar navbar-light bg-body shadow position-sticky top-0" style={{zIndex:"300"}}>
            <div className="container mt-2">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/products" className="nav-link active border-bottom h5" >
                            products
                        </Link>
                    </li>
                </ul>
                <div className="position-relative">
                    <Link to="/cart">
                        <img className="img-fluid" src={shopIcon} alt="shop" />
                    </Link>
                    <span className="badge bg-primary position-absolute top-0 start-50 rounded-circle">
                        {state.itemCounter}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
