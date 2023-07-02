import React from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import Image from './images/DogImage (1).jpg';
import { useNavigate } from 'react-router-dom';

function Content() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/buy-dogs');
  };

  return (
    <div className="top1" style={{backgroundImage:"url({'https://www.transparenttextures.com/patterns/black-thread-light.png'})"}}>
      <div className="container-sm text-center">
        <h1 className="welcome pb-3">Welcome to FuryDogs</h1>
        <p className="fs-4 px-5 py-4">
          At FuryDogs, we make it easy to buy and sell puppies through a safe and secure online platform. We are committed to making sure that every purchase or sale is fair and secure – no matter where you live. Whether you’re looking for a purebred puppy or need to find new homes for your own furry family members, FuryDogs is the perfect place to connect with other pet-lovers.
        </p>
        <button className="cssbuttons-io-button" onClick={handleButtonClick}>
          Get started
          <div className="icon">
            <PetsIcon />
          </div>
        </button>
        <div className="img">
          <img src={Image} alt="My Image" className="image-style my-5 img-fluid rounded mx-auto d-block figure-img" />
        </div>
      </div>
      {
        
      }
    </div>
  );
}

export default Content;
