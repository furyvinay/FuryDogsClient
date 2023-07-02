import React from "react";
import Grooming from "./images/Grooming.jpg";
import Health from "./images/Health.jpg";
import Nutrition from "./images/Nutrition.jpg";
import PuppyCare from "./images/Puppy Care.jpg";
import Adoption from "./images/Adoption.jpg";
import Traning from "./images/Traning.jpg";


function Content5() {
    return (
        <div className="container">
            <div className="blog">
                <p className="fw-light fst-italic">Blog</p>
                <p className="fs-2 fw-bold stay">
                    Stay up to date on what's happening with your favorite furry friends.
                    Our blog is your go-to source for pet care tips, industry news, and
                    more.
                </p>
            </div>

            <div className="container">
                <div className="row py-5 blog1">
                    <div className="col-sm-6 col-md-4 col-lg-3 py-3">
                        <div className="card">
                            <img src={Grooming} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="fw-light ">Grooming</p>
                                <p className="card-text fs-3 fw-semibold">
                                    Top Dog Grooming Tips
                                </p>
                            </div>
                            <button className="card-button">More info</button>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-3">
                        <div className="card">
                            <img src={Health} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="fw-light ">Health</p>
                                <p className="card-text fs-3 fw-semibold">
                                    5 Must-Know Health Tips for Your Pup
                                </p>
                            </div>
                            <button className="card-button">More info</button>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-6 py-3">
                        <div className="card">
                            <img src={Traning} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="fw-light ">Training</p>
                                <p className="card-text fs-3 fw-semibold">
                                    Potty Training Basics for Puppies
                                </p>
                            </div>
                            <button className="card-button">More info</button>
                        </div>
                    </div>
                </div>
                <div className="row blog1">
                    <div className="col-md-4 col-lg-6 py-3">
                        <div className="card">
                            <img src={Nutrition} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="fw-light ">Nutrition</p>
                                <p className="card-text fs-3 fw-semibold">
                                    A Simple Guide to Feeding Your Pup
                                </p>
                            </div>
                            <button className="card-button">More info</button>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-3">
                        <div className="card">
                            <img src={Adoption} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="fw-light ">Adoption</p>
                                <p className="card-text fs-3 fw-semibold">
                                    How to Safely Adopt Your Furrever Friends
                                </p>
                            </div>
                            <button className="card-button">More info</button>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-3">
                        <div className="card">
                            <img src={PuppyCare} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="fw-light ">Puppy Care</p>
                                <p className="card-text fs-3 fw-semibold">
                                    A Puppy Care Checklist For New Pet Owners
                                </p>
                            </div>
                            <button className="card-button">More info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content5;