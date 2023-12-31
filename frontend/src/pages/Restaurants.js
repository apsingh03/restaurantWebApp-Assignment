import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useSelector, useDispatch } from "react-redux";
import {
  deleteRestaurantAsync,
  getRestaurantAsync,
} from "../redux/Slices/AddDataSlice";
import { Link, useNavigate } from "react-router-dom";

import {
  sortByName,
  sortByRating,
  filterItalian,
  filterMaxican,
  filterAll,
} from "../redux/Slices/AddDataSlice";

const Restaurants = () => {
  const navigation = useNavigate();

  const getData = useSelector((state) => state.addData);

  const [Data, setData] = useState([]);

  const dispatch = useDispatch();

  const fetchData = () => {
    if (getData.isLoading !== true && getData.data.data !== undefined) {
      // console.log(getData.data.data)
      setData(getData.data.data);
    }
  };

  useEffect(() => {
    dispatch(getRestaurantAsync());

    fetchData();
  }, [navigation]);

  const filterOnChange = (data) => {
    if (data === "italian") {
      dispatch(filterItalian());
    }

    if (data === "maxican") {
      dispatch(filterMaxican());
    }

    if (data === "all") {
      dispatch(filterAll());
    }
  };

  const sortByOnChange = (data) => {
    // console.log("rating -> ", data);
    if (data === "name") {
      dispatch(sortByName());
    }

    if (data === "rating") {
      dispatch(sortByRating());
    }
  };

  return (
    <>
      <Header />

      <div id="restaurantsPage">
        <h1>Restaurant List</h1>

        <div>
          <label>Sort by:</label>
          <select
            className="form-select"
            onChange={(e) => sortByOnChange(e.target.value)}
          >
            <option>Select</option>
            <option value="name">Name</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <div className="my-4">
          <label>Filter by Cuisine:</label>
          <select
            className="form-select"
            onChange={(e) => filterOnChange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="italian">Italian</option>
            <option value="maxican">Maxican</option>
          </select>
        </div>

        {getData.isLoading === true ? (
          <p className="bg-primary text-center text-white my-2 p-2">
            {" "}
            Data Loading ...{" "}
          </p>
        ) : null}

        {getData.data.data &&
          getData.data.data.map((data) => {
            // console.log("-> " ,  data)
            return (
              <div className="border p-3 mt-3" key={data.id}>
                <h3>Name - {data.name} </h3>

                <p>Cuisine: {data.cuisine} </p>

                <p>Address: {data.address} </p>

                <p>Rating: {data.rating} </p>

                <div className="d-flex flex-row actionBtns">
                  <div>
                    <Link
                      className="btn btn-primary btn-md"
                      to={`/restaurantDetail/${data.id}`}
                    >
                      {" "}
                      View Details{" "}
                    </Link>
                  </div>

                  <div>
                    <button
                      onClick={() =>
                        dispatch(deleteRestaurantAsync({ id: data.id }))
                      }
                      className="btn btn-danger btn-md"
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </div>

                  <div>
                    <Link
                      className="btn btn-warning btn-md"
                      to={`/update/${data.id}`}
                    >
                      {" "}
                      Update{" "}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <Footer />
    </>
  );
};

export default Restaurants;
