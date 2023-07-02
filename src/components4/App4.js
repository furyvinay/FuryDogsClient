import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "../components/Button";
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinDropIcon from '@mui/icons-material/PinDrop';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';

const BASE_URL = process.env.REACT_APP_BASE_URL; 

const ViewDogs = () => {
  const [dogs, setDogs] = useState([]);
  const [favouriteDogs, setFavouriteDogs] = useState([]);
  const [cookies, _] = useCookies(["access_token"]);

  const userID = useGetUserID();
  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/dogs/viewDogs`);
        setDogs(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchFavouriteDogs = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/dogs/favouriteDogs/ids/${userID}`
        );
        setFavouriteDogs(response.data.favouriteDogs);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFavouriteDogs();
    fetchDogs();
  }, [userID]);

  const favouriteDog = async (dogID) => {
    try {

      const response = await axios.put(
        `${BASE_URL}/dogs/viewDogs`,
        {
          dogID,
          userID,
        },
        { headers: { authorization: cookies.access_token } }
      );
      setFavouriteDogs(response.data.favouriteDogs);
    } catch (err) {
      console.error(err);
    }
  };

  const isFavouriteDogSaved = (id) => favouriteDogs && favouriteDogs.includes(id);


  return (
    <div className="top1 container-fluid">
      <div className="container px-5">
        <h2 className="py-4">Dogs For Sale</h2>
        <p className="py-2">
          Buy Health-certified dogs and puppies online in India for sale,
          Available Dog breeds like Labrador, German Shepherd, Golden Retriever,
          Shih Tzu, Siberian Husky, Poodle, and Maltipoo. The most popular
          species are available in India, Labrador Retriever (Rs. 12 K - 80 K ),
          Poodle (Rs. 1.10 Lakh - 2.90 Lakh), Maltipoo (Rs. 1.05 Lakh - 2.10
          Lakh), Siberian Husky (Rs. 25 K - 1 Lakh) , Shih Tzu (Rs. 20 K - 80
          K). Newborn puppy prices start from Rs 12,000 in India. To know more
          about puppy prices, photos, videos, reviews, and other details, please
          select your desired breed from the list below. Also, 7075745531, call
          now and check the dog's valuation on Fury Dogs
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4 bgViewDog rounded-5 my-5 pb-4">
          {dogs.map((dog) => (
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
                    <button
                      onClick={() => favouriteDog(dog._id)}
                      disabled={isFavouriteDogSaved(dog._id)}
                      className="btn btn-warning btn-sm"
                    >
                      {isFavouriteDogSaved(dog._id) ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </button>
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