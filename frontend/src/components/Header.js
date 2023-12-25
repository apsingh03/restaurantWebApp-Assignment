import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="mb-5" >
        <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: "#F8F9FA"  }} >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{color: "black"}} >
              BistroPal
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
            
              <div className="me-auto" ></div>

              <ul className="navbar-nav  mb-2 mb-lg-0" style={{ color: "black" , opacity: "0.5" }} >
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    style={{color: "#000"}}
                    aria-current="page"
                    to="/restaurants"
                    
                  >
                    Restaurants List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={{color: "#000"}} to="/addrestaurant">
                    Add Restaurant
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link"
                  style={{color: "#000"}}
                  to="/aboutus">
                    About us
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
