import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import SearchIcon from '@mui/icons-material/Search';
import footerDog from './images/footerDog.jpg';

function Content6() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/buy-dogs');
  };

  return (
    <div className="container text-left my-5 py-5 px-5">
      <div className="row">
        <div className="col px-5">
          <p className="fs-5">Find Your Pup</p>
          <p className="fs-1 fw-bold">Find your perfect pup on FuryDogs!</p>
          <Button
            icon={<SearchIcon />}
            name="Browse Now"
            className="whatWeDoButton black-button"
            onClick={handleButtonClick}
          />
        </div>
        <div className="col">
          <img src={footerDog} className="img-fluid" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Content6;
