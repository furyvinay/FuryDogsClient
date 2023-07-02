import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ImgRegister from "./images/register.jpg";
import { useCookies } from "react-cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL; 


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [_, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`${BASE_URL}/auth/register`, {
                email,
                password,
            });
            alert("Registration Completed! Now login.");
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <section className="vh-100 py-4 my-5 px-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 text-black">
                        <div className="px-5 ms-xl-4">
                            <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: "#709085" }}></i>

                        </div>
                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                            <form style={{ width: "23rem" }} onSubmit={handleSubmit}>
                                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                                    Create an account.
                                </h3>
                                <div className="form-outline mb-4">
                                    <input
                                        className="form-control form-control-lg"
                                        type="email"
                                        id="register-email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                    <label className="form-label" htmlFor="form2Example18">
                                        Email address
                                    </label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        className="form-control form-control-lg"
                                        type="password"
                                        id="register-password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                    <label className="form-label" htmlFor="form2Example28">
                                        Password
                                    </label>
                                </div>
                                <div className="pt-1 mb-4">
                                    <button className="btn btn-info btn-lg btn-block" type="submit">
                                        Register
                                    </button>
                                </div>
                                <p>
                                    Already registered? <Link to="/buy-dogs/login" className="link-info">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img
                            src={ImgRegister}
                            alt="Login image"
                            className="w-110 vh-100"
                            style={{ objectFit: "cover", objectPosition: "left" }}
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;