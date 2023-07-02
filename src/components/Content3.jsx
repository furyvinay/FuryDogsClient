import React from "react";
import Image from "./images/sheroo.png"


function Content3(props) {
  return ( 
    <div className="text-center container pb-5">
        <span className="fs-1 fw-bold">What Our Customers Say</span>
        <div className="pt-5">
            <div className="circle img-fluid"><img className="img-fluid" alt="avatar1" src={Image} /></div>
            <p className="pt-5 review">"I'm so happy I found this website which enabled me to find the perfect pup for me. The team was very helpful and patient as I was taking my time to choose the right Dog. I'm so glad I found this website!"</p>
        </div>
        <span className="fs-3 fw-bold">Vinay kumar</span>
    </div>
  );
}

export default Content3;
