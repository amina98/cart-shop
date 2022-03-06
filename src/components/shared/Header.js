import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { NavDropdown, Nav, Navbar, Container } from "react-bootstrap";
import { CartContext } from "../../context/CartContextProvider";
import shopIcon from "../../assets/icon/shop.svg";
import styles from "./Header.module.css";
import { Accordion, Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

const Header = () => {
    const history = useHistory();
    const { state, dispatch } = useContext(CartContext);
    const [menuKey, setMenuKey] = useState("");
    const menuChangeHandler = (e) => {
        setMenuKey("");
    };
    const CustomToggle = ({ children, eventKey }) => {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log("totally custom!")
        );

        return (
            <button
                type="button"
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        );
    };
    return (
        <>
            <div
                className="navbar navbar-light bg-body shadow position-sticky top-0 d-none d-md-block"
                style={{ zIndex: "300", height: "75px" }}
            >
                <div className="container mt-2 d-none d-md-flex">
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
                                <Link
                                    to="/auth"
                                    className="text-decoration-none"
                                >
                                    <span className="fs-6 text-decoration-none">
                                        Login / Regester
                                    </span>
                                </Link>
                            ) : (
                                <NavDropdown
                                    title="Dashboard"
                                    menuVariant="light"
                                >
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
            <div
                className="navbar navbar-light bg-body shadow position-sticky top-0 d-md-none"
                style={{ zIndex: "300", height: "50px", padding: "1rem" }}
            >
                <div className="d-md-none">
                    <input
                        className={styles.menuToggle}
                        id="menu-toggle"
                        type="checkbox"
                        onChange={menuChangeHandler}
                    />
                    <label class={styles.menuButtonContainer} for="menu-toggle">
                        <div className={styles.menuButton}></div>
                    </label>
                    <ul className={styles.menu}>
                        <li className="bg-light">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="bg-light">
                            <Link to="/products">products</Link>
                        </li>
                        <li className="bg-light">
                            {state.token != "" ? (
                                <Link
                                    to="/auth"
                                    className="text-decoration-none"
                                >
                                    <span className="fs-6 text-decoration-none">
                                        Login / Regester
                                    </span>
                                </Link>
                            ) : (
                                <Accordion className="w-100">
                                    <Card
                                        style={{
                                            backgroundColor: "transparent",
                                            border: "none",
                                            boxShadow: "unset",
                                        }}
                                    >
                                        <Card.Header className="p-0 bg-transparent border-0">
                                            <CustomToggle eventKey="0">
                                                Dashboard
                                            </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <ul>
                                                    <li>Profile</li>
                                                    <li
                                                        onClick={() => {
                                                            dispatch({
                                                                type: "LOGOUT",
                                                            });
                                                            history.push("/");
                                                        }}
                                                    >
                                                        logOut
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;
