import React, { useEffect, useState } from "react";
import Header from "../components/Header";

import Footer from "../components/Footer";

import { useSelector , useDispatch } from "react-redux";
import { getRestaurantByIdAsync } from "../redux/Slices/DataByIdSlice";


const RestaurantDetail = () => {

    const dispatch = useDispatch();

    const getData = useSelector((state) => state.getDataBy);

    // console.log(getData)

    useEffect(() => {

        const idFromUrl = window.location.href.split("/")[4];
        dispatch(getRestaurantByIdAsync({id: idFromUrl }))
      
      }, []);


  return (

    <>

    <Header />

    <section className="p-5" >
        <h1>Restaurant Details</h1>

        <hr />

        <h1> {getData.data.data && getData.data.data[0].name  } </h1>

        <p> <b>cuisine - </b> {getData.data.data && getData.data.data[0].cuisine  }  </p>

        <p> <b>address - </b> {getData.data.data && getData.data.data[0].address  }  </p>

        <p> <b>city - </b> {getData.data.data && getData.data.data[0].city  }  </p>

        <p> <b>rating - </b> {getData.data.data && getData.data.data[0].rating  }  </p>



    </section>

    <Footer />
    
    
    </>
   
  )
}

export default RestaurantDetail