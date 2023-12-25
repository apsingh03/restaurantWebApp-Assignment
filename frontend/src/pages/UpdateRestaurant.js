import React, { useEffect, useState } from "react";
import Header from "../components/Header";

import Footer from "../components/Footer";

import { useSelector, useDispatch } from "react-redux";
import { getRestaurantByIdAsync } from "../redux/Slices/DataByIdSlice";
import { updateRestaurantAsync } from "../redux/Slices/AddDataSlice";

import { useNavigate } from "react-router-dom";

const UpdateRestaurant = () => {
  const getData = useSelector((state) => state.getDataBy);
  const navigation = useNavigate();

  const [resoId, setresoId] = useState("");
  const [name, setname] = useState("");
  const [cuisine, setcuisine] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [rating, setrating] = useState("");

  //   console.log( getData.data.data.name )

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Please Type in Name");
    } else if (cuisine === "") {
      alert("Please Type in cuisine");
    } else if (address === "") {
      alert("Please Type in address");
    } else if (city === "") {
      alert("Please Type in city");
    } else if (rating === "") {
      alert("Please Type in rating");
    } else {
      //   console.log("dsafasddasfdasfasdfsadfa");

      dispatch(
        updateRestaurantAsync({
          resoId: resoId,
          name: name,
          cuisine: cuisine,
          address: address,
          city: city,
          rating: rating,
        })
      );

      navigation("/restaurants");
    }

    // console.log("cliced ");
  };

  const fetchData = () => {
    if (getData.isLoading !== true && getData.data.data !== undefined) {
      setname(getData.data.data[0].name);
      setcuisine(getData.data.data[0].cuisine);
      setaddress(getData.data.data[0].address);
      setcity(getData.data.data[0].city);
      setrating(getData.data.data[0].rating);
    }
  };

  useEffect(() => {
    const idFromUrl = window.location.href.split("/")[4];
    setresoId(idFromUrl);
    dispatch(getRestaurantByIdAsync({ id: idFromUrl }));

    fetchData();
  }, []);

  return (
    <>
      <Header />

      <div id="addRestaurantsPage">
        <h1>Add Restaurant</h1>

        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              id="name"
              onChange={(e) => setname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cuisine" className="form-label">
              Cuisine:
            </label>
            <input
              type="text"
              className="form-control"
              value={cuisine}
              onChange={(e) => setcuisine(e.target.value)}
              id="cuisine"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address:
            </label>
            <input
              onChange={(e) => setaddress(e.target.value)}
              type="text"
              className="form-control"
              value={address}
              id="address"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City:
            </label>
            <input
              type="text"
              className="form-control"
              value={city}
              onChange={(e) => setcity(e.target.value)}
              id="city"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="rating" className="form-label">
              Rating:
            </label>
            <input
              type="text"
              onChange={(e) => setrating(e.target.value)}
              value={rating}
              className="form-control"
              id="rating"
            />
          </div>

          <div>
            <input
              type="submit"
              value="Update Restaurant"
              className="btn btn-primary btn-md"
            />
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default UpdateRestaurant;
