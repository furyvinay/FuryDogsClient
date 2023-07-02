import React from "react";
import Image from "./images/sheroo2.png"

function Content4() {
    return (
        <div className="content4 container text-center my-5 shadow-lg p-3 mb-6 bg-body-danger rounded-5">
            <p className="fs-4 py-2">Make pet-owning and buying easier than ever before with FuryDogs.</p>
            <p className="fs-1 fw-bold py-4">Why FuryDogs</p>
            <img className="img-fluid shadow-lg bg-body-danger rounded-5" alt="avatar1" src={Image} />
        </div>
    )
}

export default Content4;