import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <>
      <Header />

      <section className="firstContainer d-flex flex-column justify-content-center align-items-center px-4">
        <h1 className="display-4">Welcome to BistroPal</h1>
        <p className="lead">
          Elevate your restaurant's performance with our efficient restaurant
          management system.
        </p>
        <div
          className=""
          style={{ borderTop: "1px solid #ddd", width: "100%" }}
        ></div>

        <hr className="my-4" />

        <h6>
          Explore the features using the navigation links above and experience
          streamlined restaurant management.
        </h6>
      </section>

      <section className="secondContainer">
        <h2>Menu Management</h2>

        <div className="row">
          <div className="col-6">
            <div className="border">
              <img
                src="https://placehold.co/400x300/EFEFEFF/grey?text=Special"
                height={400}
                width={"100%"}
                alt="Dish 1"
              />
              <div className="p-3 ">
                <h5>Special Dish 1 </h5>
                <p>
                  Delicious description of the dish. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="border">
              <img
                src="https://placehold.co/400x300/EFEFEFF/grey?text=Special"
                height={400}
                width={"100%"}
                alt="Dish 2"
              />

              <div className="p-3 ">
                <h6>Special Dish 2 </h6>
                <p>
                  Another tempting dish description. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="thirdContainer">
        <h2>Order Tracking</h2>

        <div className="row">
          <div className="col-6">
            <div className="border">
              <img
                src="https://placehold.co/400x300/EFEFEFF/grey?text=Special"
                height={400}
                width={"100%"}
                alt="Dish 1"
              />
              <div className="p-3 ">
                <h5>Order #1</h5>
                <p>
                  Details and status of the first order. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="border">
              <img
                src="https://placehold.co/400x300/EFEFEFF/grey?text=Special"
                height={400}
                width={"100%"}
                alt="Dish 2"
              />

              <div className="p-3 ">
                <h6>Order #2 </h6>
                <p>
                  Details and status of the second order. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3>About BistroPal</h3>
            <p>
              Discover the story behind BistroPal and how we strive to
              revolutionize restaurant management for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
