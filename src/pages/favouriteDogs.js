import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "../components/Button";
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinDropIcon from '@mui/icons-material/PinDrop';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';

const BASE_URL = process.env.REACT_APP_BASE_URL; 

const ViewDogs = () => {
  const [favouriteDogs, setFavouriteDogs] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {


    const fetchfavouriteDog = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/dogs/favouriteDogs/${userID}`);
        setFavouriteDogs(response.data.favouriteDogs);
      } catch (err) {
        console.error(err);
      }
    };

    fetchfavouriteDog();

  }, []);



  return (
    <div className="top1 container-fluid">
      <div className="container px-5">

        <h1>favourite Dogs</h1>

        <div className="row row-cols-1 row-cols-md-3 g-4 bgViewDog rounded-5 my-5 pb-4">
          {favouriteDogs.map((dog) => (
            <div className="col dogCard" key={dog._id}>
              <div className="card">
                <img
                  className="AddedImg card-img-top img-fluid rounded-bottom-5"
                  src={dog.imageUrl}
                  alt={dog.name}
                />
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-between">
                    <span className="dogList">Name: {dog.name}</span>

                  </h5>
                  <p className="card-text">{dog.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><span className="dogList">Breed:</span> {dog.breed}</li>
                  <li className="list-group-item"><span className="dogList">Age:</span> {dog.age}</li>
                  <li className="list-group-item"><span className="dogList">Weight:</span> {dog.weight} kg</li>
                  <li className="list-group-item"><span className="dogList">Gender:</span> {dog.gender}</li>
                  <li className="list-group-item">
                    <div class="container text-center">
                      <div class="row">
                        <div class="col">
                          <PinDropIcon />
                        </div>
                        <div class="col">
                          <SettingsPhoneIcon />
                        </div>
                      </div>
                    </div>
                    <div class="container text-center">
                      <div class="row">
                        <div class="col">
                          {dog.city}
                        </div>
                        <div class="col">
                          {dog.phoneNumber}
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row py-2 px-2">
                      <div className="col">
                        <div className="d-flex justify-content-between">
                          <Button
                            icon={<CallIcon />}
                            name={"Call"}
                            className="btn btn-secondary me-2 btn-sm"
                          />
                          <Button
                            icon={<WhatsAppIcon />}
                            name={"WhatsApp"}
                            className="btn btn-warning bg- me-2 btn-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item fs-6 ">
                    Posted  : {new Date(dog.created_at).toLocaleDateString()}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



  );
};

export default ViewDogs;
