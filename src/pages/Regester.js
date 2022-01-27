import React, { useState, useEffect } from "react";
import bgImg from "../assets/img/img2.jpg";
import { Link, useHistory } from "react-router-dom";
import { validation } from "../helper/functhens";
import { autheration } from "../services/api";
import { notify } from "react-notify-toast";

const Regester = () => {
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState();
    const [authRes, setAuthRes] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    useEffect(() => {
        setErrors(validation(userData));
        console.log(errors);
    }, [userData]);
    useEffect(() => {
        console.log(authRes);
        if (authRes) {
            if (authRes.success) {
                notify.show(`${authRes.message}`, "success", 2000);
                history.push("/auth");
            } else {
                notify.show(`${authRes.message}`, "error", 2000);
            }
        }
    }, [authRes]);
    const changeHandler = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };
    const registerHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const { userName, email, password } = userData;
        if (Object.keys(errors).length === 0) {
            await autheration(userName, email, password).then((data) => {
                setAuthRes(data);
                setIsLoading(false);
            });
        } else {
            notify.show("fix errors", "error", 2000);
        }
    };
    return (
        <div
            className="container d-flex justify-content-center align-items-center col-8"
            style={{ minHeight: "calc(100vh - 150px)" }}
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
                        <h3>Register</h3>
                        <div className="pb-2">
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                id="username"
                                name="userName"
                                value={userData.userName}
                                placeholder="your username"
                                onChange={changeHandler}
                            />
                            {errors && errors.userName && (
                                <span
                                    className="text-danger"
                                    style={{ fontSize: "0.75rem" }}
                                >
                                    *{errors.userName}
                                </span>
                            )}
                        </div>
                        <div className="pb-2">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control form-control-sm"
                                id="email"
                                name="email"
                                value={userData.email}
                                placeholder="username@example.com"
                                onChange={changeHandler}
                            />
                            {errors && errors.email && (
                                <span
                                    className="text-danger"
                                    style={{ fontSize: "0.75rem" }}
                                >
                                    {errors.email}
                                </span>
                            )}
                        </div>
                        <div className="pb-2">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control form-control-sm"
                                id="password"
                                name="password"
                                value={userData.password}
                                placeholder="your password"
                                onChange={changeHandler}
                            />
                            {errors && errors.password && (
                                <span
                                    className="text-danger"
                                    style={{ fontSize: "0.75rem" }}
                                >
                                    {errors.password}
                                </span>
                            )}
                        </div>
                        <div className="pb-3 position-relative">
                            <label
                                htmlFor="confirmPassword"
                                className="form-label"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="form-control form-control-sm"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={userData.confirmPassword}
                                placeholder="confirm your password"
                                onChange={changeHandler}
                            />
                            {errors && errors.confirmPassword && (
                                <span
                                    className="text-danger position-absolute bottom-0"
                                    style={{ fontSize: "0.75rem" }}
                                >
                                    {errors.confirmPassword}
                                </span>
                            )}
                        </div>
                        <div>
                            <button
                                className="btn btn-sm btn-primary w-100"
                                onClick={registerHandler}
                            >
                                Register
                            </button>
                        </div>
                        <div className="text-center mt-3">
                            <span>
                                Have a account? <Link to="/auth">Log in</Link>{" "}
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Regester;
