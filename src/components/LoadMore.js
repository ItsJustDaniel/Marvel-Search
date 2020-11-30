import React from "react";
import "./LoadMore.css";

const LoadMore = ({ onLoadClick }) => {
  return (
    <div className="button-container">
      <button onClick={() => onLoadClick()} className="LoadMore">
        Load More
      </button>
    </div>
  );
};

export default LoadMore;
