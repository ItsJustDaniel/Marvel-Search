import React from "react";
import { Element } from "react-scroll";
import "./CharacterDetails.css";

const CharacterDetails = ({ selectedCard }) => {
  if (!selectedCard) {
    return <div></div>;
  }
  const image = selectedCard.thumbnail.path;
  const file = selectedCard.thumbnail.extension;
  const detail = selectedCard.urls.find(
    (url) => url.type === "wiki" || url.type === "detail"
  );
  console.log(detail);
  return (
    <div>
      <Element id="CharacterDetails" name="CharacterDetails">
        <h2>{selectedCard.name}</h2>
        <div className="CharacterProfile">
          <img src={`${image}/portrait_uncanny.${file}`}></img>
          <h3 className="CharacterDesc">
            {selectedCard.description}{" "}
            <a target="_blank" href={detail.url}>
              Read More
            </a>
          </h3>
        </div>
      </Element>
    </div>
  );
};

export default CharacterDetails;
