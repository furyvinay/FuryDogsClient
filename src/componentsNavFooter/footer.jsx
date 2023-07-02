import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="container-fluid pb-0 bg-black text-center text-white">
            <div className="py-5">
                <h2 className="py-3">Fury Dogs</h2>
                <p>We are an online platform focused on buying and selling of Dogs.</p>
                <p className="fw-lighter">Build By Vinay</p>
                <p className="fst-italic fw-lighter">Copyright &copy; {year}</p>
            </div>
        </div>
    );
}

export default Footer;
