import React from "react";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import Category from "../Category/Category";
import Customer from "../Customer/Customer";
import System from "../System/System";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Books></Books>
      <Customer></Customer>
      <div className="bg-color">
        <System></System>
      </div>
    </div>
  );
};

export default Home;
