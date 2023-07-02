import React from "react";
import BuyDogs from "./images/BuyDogs.jpg";
import SellDogs from "./images/SellDogs.jpg";
import { BrowserRouter as Router, Link } from 'react-router-dom';


function BuySellDogs() {
    return (
        <div className="container text-left top1">
            <div className="row">
                <div className="col BuySellDogsCard">
                    <Link to="/viewDogs">
                        <div className="card text-bg-dark BuySellDogsCard2">
                            <img src={BuyDogs} className="card-img" alt="..." />
                        </div>
                    </Link>
                </div>
                <div className="col BuySellDogsCard">
                    <Link to="/buy-dogs/register">
                        <div className="card text-bg-dark BuySellDogsCard2">
                            <img src={SellDogs} className="card-img" alt="..." />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BuySellDogs;
