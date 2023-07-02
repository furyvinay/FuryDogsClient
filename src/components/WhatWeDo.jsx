import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";
import PetsIcon from '@mui/icons-material/Pets';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ReviewsIcon from '@mui/icons-material/Reviews';
import MessageIcon from '@mui/icons-material/Message';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

function WhatWeDo() {

    const [cookies, setCookies] = useCookies(["access_token"])
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/viewDogs');
    }

    const handleButtonClick1 = () => {
        if (!cookies.access_token) {
            navigate('/buy-dogs/login');
        } else {
            navigate('/buy-dogs/auth/addDogForm');
        }
    }

    return (
        <div className="container py-5">
            <div className="row py-5">
                <div className="col-md-12 text-center">
                    <h2 className="fw-bold">What We Do</h2>
                </div>
            </div>

            <div className="row py-5 shadow-lg p-3 mb-5 bg-body-danger rounded-5 backgroundImg2">
                <div className="col-md-4 ">
                    <div className="row custom-margin ">
                        <div className="col-md-12 rounded-4 p-4 whatWeDo1 text-white shadow-lg p-3 mb-5 bg-body-danger">
                            <h4 className="fw-bold pt-3 px-3">Buy Puppies</h4>
                            <p className="py-4 px-4">
                                Our secure platform makes it easy to buy and sell puppies.
                                Browse through verified listings and pick the perfect pup for you!
                            </p>
                            <Button
                                icon={<PetsIcon />}
                                name={"Puppies"}
                                onClick={handleButtonClick}
                            />
                        </div>
                    </div>
                </div>


                <div className="col-md-4 ">
                    <div className="row custom-margin2 ">
                        <div className="col-md-12 whatWeDo2 rounded-4 p-4 shadow-lg bg-body-danger rounded-4">
                            <h4 className="fw-bold pt-3 px-3">Sell Puppies</h4>
                            <p className="py-4 px-4">
                                Put your puppy up for sale with our secure platform. Get matched
                                with interested buyers in no time!
                            </p>
                            <Button
                                icon={<StorefrontIcon />}
                                name={"Listing"}
                                onClick={handleButtonClick1}
                            />
                        </div>
                    </div>
                    <div className="row mt-3 custom-margin2 pt-5">
                        <div className="col-md-12 bg-warning rounded-4 p-4 shadow-lg bg-body-danger rounded-4">
                            <h4 className="fw-bold pt-3 px-3">Post Reviews</h4>
                            <p className="py-4 px-4">
                                Share your experience with the FuryDogs community. Write and post
                                reviews, and help other members find the pup that’s perfect for
                                them!
                            </p>
                            <Button
                                icon={<ReviewsIcon />}
                                name={"Reviews"} />
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="row custom-margin">
                        <div className="col-md-12 whatWeDo4 rounded-4 p-4 shadow-lg bg-body-danger rounded-5">
                            <h4 className="fw-bold pt-3 px-3">Send Messages</h4>
                            <p className="py-4 px-4">
                                Send messages to connect with other members of the Pupyzer
                                community.
                            </p>
                            <Button
                                icon={<MessageIcon />}
                                name={"Message"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeDo;
