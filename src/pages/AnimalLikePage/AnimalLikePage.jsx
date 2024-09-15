import React from "react";
import { useSelector } from "react-redux";
import AnimalCard from "@/common/AnimalCard/AnimalCard";
import "@/pages/AnimalLikePage/AnimalLikePage.style.css";

const AnimalLikePage = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  if (favorites.length === 0) {
    return <div className="no-favorites"> 찜한 동물이 없습니다.</div>;
  }
  return (
    <div className="animal-card-container">
      <h6 className="page-nav">
        구조동물 &nbsp; &gt; &nbsp; <strong>즐겨찾기한 동물</strong>
      </h6>
      <div className="animals-page-title">
        <span>즐겨찾기한 동물</span>
      </div>
      <div className="animal-card-count">
        총{" "}
        <span className="count-number">
          {favorites.length.toLocaleString()}
        </span>{" "}
        건
      </div>
      <div className="animal-card-wrapper">
        {favorites.map((animal, index) => (
          <AnimalCard key={index} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalLikePage;