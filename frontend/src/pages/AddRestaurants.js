import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AddRestaurants = () => {
  const [name, setname] = useState("");
  const [cuisine, setcuisine] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [rating, setrating] = useState("");

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
      console.log("dsafasddasfdasfasdfsadfa");
    }

    console.log("cliced ");
  };

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
              id="name"
              onChange={(e) => setname(e.target.value)}
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cuisine" className="form-label">
              Cuisine:
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setcuisine(e.target.value)}
              id="cuisine"
              placeholder="name@example.com"
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
              id="address"
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City:
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setcity(e.target.value)}
              id="city"
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="rating" className="form-label">
              Rating:
            </label>
            <input
              type="text"
              onChange={(e) => setrating(e.target.value)}
              className="form-control"
              id="rating"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <input
              type="submit"
              value="Add Restaurant"
              className="btn btn-primary btn-md"
            />
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default AddRestaurants;
