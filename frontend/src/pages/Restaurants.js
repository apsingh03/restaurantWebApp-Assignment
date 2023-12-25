import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Restaurants = () => {
  return (
    <>
      <Header />

      <div id="restaurantsPage">
        <h1>Restaurant List</h1>

        <div className="my-4">
          <label>Filter by Cuisine:</label>
          <select class="form-select" aria-label="Default select example">
            <option selected value="all">
              All
            </option>
            <option value="italian">Italian</option>
            <option value="maxican">Maxican</option>
          </select>
        </div>

        <div>
          <label>Sort by:</label>
          <select class="form-select" aria-label="Default select example">
            <option selected value="name">
              Name
            </option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <div className="border p-3 mt-3">
          <h3>Name - </h3>

          <p>Cuisine: indian</p>

          <p>Address: Saidapur galli, Mudhol </p>

          <p>Rating: 4.8</p>

          <div className="d-flex flex-row actionBtns">
            <div>
              <button className="btn btn-primary btn-md"> View Details </button>
            </div>

            <div>
              <button className="btn btn-danger btn-md"> Delete </button>
            </div>

            <div>
              <button className="btn btn-warning btn-md"> Update </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Restaurants;
