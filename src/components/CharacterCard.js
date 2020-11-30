import React from "react";
import { Link } from "react-scroll";

import "./CharacterCard.css";

const CharacterCard = ({ character, onCharacterSelect }) => {
  const image = character.thumbnail.path;
  const file = character.thumbnail.extension;

  return (
    <div>
      <Link to="CharacterDetails">
        <div
          className="CardContainer"
          onClick={() => {
            onCharacterSelect(character);
          }}
        >
          <img src={`${image}/standard_fantastic.${file}`}></img>
          <h3 className="CharacterName">{character.name}</h3>
        </div>
      </Link>
    </div>
  );
};

export default CharacterCard;
