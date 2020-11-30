import React from "react";
import "./randomButton.css";

const RandomButton = ({ handleRandom }) => {
  const random = Math.floor(Math.random() * 1473);
  return (
    <div className="button-container">
      <button
        onClick={() => {
          handleRandom(random);
        }}
        className="random-button"
      >
        Surprise Me!
      </button>
    </div>
  );
};

export default RandomButton;
