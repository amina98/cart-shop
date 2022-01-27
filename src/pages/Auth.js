import React, { useState, useEffect, useContext } from "react";
import bgImg from "../assets/img/img1.jpg";
import { Link, useHistory } from "react-router-dom";
import { validation } from "../helper/functhens";
import { notify } from "react-notify-toast";
import { login } from "../services/api";
//context
import { CartContext } from "../context/CartContextProvider";

const Auth = () => {
    const { state, dispatch } = useContext(CartContext);
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [loginRes, setLoginRes] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    useEffect(() => {
        setErrors(validation(userData));
        console.log(errors);
    }, [userData]);
    useEffect(() => {
        console.log(loginRes);
        if (loginRes) {
            if (loginRes.success) {
                notify.show(`Wellcome`, "success", 2000);
                dispatch({ type: "LOGIN", payload: `${loginRes.token}` });
                console.log(state);
                history.push("/");
            } else {
                notify.show(`${loginRes.message}`, "error", 2000);
            }
        }
    }, [loginRes]);
    const changeHandler = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };
    const logInHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const { email, password } = userData;
        if (Object.keys(errors).length === 0) {
            await login(email, password).then((data) => {
                setLoginRes(data);
                setIsLoading(false);
            });
        } else {
            notify.show("fix errors", "error", 2000);
        }
    };
    return (
        <div
            className="container d-flex justify-content-center align-items-center col-8"
            style={{ height: "calc(100vh - 150px)" }}
        >
            {isLoading && (
                <div className="position-absolute top-0 bottom-0 bg-light w-100 d-flex justify-content-center align-items-center bg-opacity-25">
                    <div className="loadingio-spinner-dual-ball-vgf8tsobm28">
                        <div className="ldio-dpu1y2up98i">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            )}
            <div className="row border rounded overflow-hidden w-100">
                <div
                    className="col-6 p-0"
                    style={{
                        backgroundImage: `url(${bgImg})`,
                        backgroundSize: "cover",
                    }}
                >
                    {/* <img className="img-fluid" src={bgImg} alt="login-bg" /> */}
                </div>
                <div className="col-6 p-0">
                    <form className="w-100 p-5">
                        <h3>Sign In</h3>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={userData.email}
                                placeholder="username@example.com"
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={userData.password}
                                placeholder="your password"
                                onChange={changeHandler}
                            />
                        </div>
                        <div>
                            <button
                                className="btn btn-primary w-100"
                                onClick={logInHandler}
                            >
                                Sing in
                            </button>
                        </div>
                        <div className="row ps-3 pe-3 pt-2">
                            <div className="form-check col-6">
                                <label
                                    htmlFor="remember"
                                    className="form-check-label"
                                >
                                    Remember me
                                </label>
                                <input
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                    className="form-check-input"
                                />
                            </div>
                            <div className="col-6">
                                <Link to="">
                                    <span>Forget Password?</span>
                                </Link>
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <span>
                                Haven't a account?{" "}
                                <Link to="/regester">Create account</Link>{" "}
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Auth;
