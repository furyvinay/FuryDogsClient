import { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL; 

const AddDogForm = () => {
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);

  const [dog, setDog] = useState({
    name: "",
    breed: "",
    age: "",
    weight: "",
    gender: "",
    description: "",
    imageUrl: "",
    city: "",
    phoneNumber: "",
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDog({ ...dog, [name]: value });
  };

  const handleSubmit = async (event) => {
    
    try {
      await axios.post(`${BASE_URL}/dogs/viewDogs`, dog, {
        headers: { authorization: cookies.access_token },
      });
      alert("Successfully added dog!");
      navigate("/viewDogs");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="top1 text-center">
      <div className="container form-box">
        <h1>Add Puppy to listing</h1>
        <form onSubmit={handleSubmit}>

          <div className="row g-3 align-items-center py-3">
            <div className="col-sm-3">
              <label htmlFor="name" className="col-form-label text-end">Name:</label>
            </div>
            <div className="col-sm-9">
              <input type="text" name="name" className="form-control yellow-border" onChange={handleChange} />
            </div>
          </div>

          <div className="row g-3 align-items-center py-3">
            <div className="col-sm-3">
              <label htmlFor="breed" className="col-form-label text-end">Breed:</label>
            </div>
            <div className="col-sm-9">
              <input type="text" name="breed" className="form-control yellow-border" onChange={handleChange} />
            </div>
          </div>

          <div className="row g-3 align-items-center py-3">
            <div className="col-sm-3">
              <label htmlFor="age" className="col-form-label text-end">Age:</label>
            </div>
            <div className="col-sm-9">
              <input type="number" name="age" className="form-control yellow-border" onChange={handleChange} />
            </div>
          </div>

          <div className="row g-3 align-items-center py-3">
            <div className="col-sm-3">
              <label htmlFor="weight" className="col-form-label text-end">Weight:</label>
            </div>
            <div className="col-sm-9">
              <input type="number" name="weight" className="form-control yellow-border" onChange={handleChange} />
            </div>
          </div>

          <div className="row g-3 align-items-center py-3">
            <div className="col-sm-3">
              <label htmlFor="gender" className="col-form-label text-end">Gender:</label>
            </div>
            <div className="col-sm-9">
              <input type="text" name="gender" className="form-control yellow-border" onChange={handleChange} />
            </div>
          </div>

          <div className="row g-3 align-items-center py-3">
            <div className="col-sm-3">
              <label htmlFor="description" className="col-form-label text-end">Description:</label>
            </div>
            <div className="col-sm-9">
              <textarea name="description" className="form-control yellow-border" onChange={handleChange} />
            </div>
          </div>

          <div className="row g-3 align-items-center py-3">
            <div className="col-sm-3">
              <label htmlFor="city" className="col-form-label text-end">City:</label>
            </div>
            <div className="col-sm-9">
              <input type="text" name="city" className="form-control yellow-border" onChange={handleChange} />
            </div>
          </div>

          <div className="row g-3 align-items-center py-3">
            <div className="col-sm-3">
              <label htmlFor="number" className="col-form-label text-end">Phone Number:</label>
            </div>
            <div className="col-sm-9">
            <input type="number" name="phoneNumber" className="form-control yellow-border" onChange={handleChange} />

            </div>
          </div>

          <div className="row g-3 align-items-center py-3">
            <div className="col-sm-3">
              <label htmlFor="imageUrl" className="col-form-label text-end">ImageUrl:</label>
            </div>
            <div className="col-sm-9">
              <input type="text" name="imageUrl" className="form-control yellow-border" onChange={handleChange} />
            </div>
          </div>

          <div className="row g-3 align-items-center py-3">
            <div className="col-sm-9 offset-sm-3">
              <button type="submit" className="addForm">
                <div>
                  <span>
                    <p>Add Puppy</p><p>:)</p>
                  </span>
                </div>
                <div>
                  <span>
                    <p>Listed</p><p>:D</p>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDogForm;
