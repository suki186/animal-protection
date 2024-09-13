import React from "react";
import Banner from "./component/Banner/Banner";
import "./HomePage.style.css";
import HomeAnimalSearch from "./component/HomeAnimalSearch/HomeAnimalSearch";

const HomePage = () => {
  return (
    <div>
      HomePage
      <Banner />
      <HomeAnimalSearch />
    </div>
  );
};

export default HomePage;
