import React from "react";
import CharacterCard from "./CharacterCard";
import "./CardList.css";

const CardList = ({ characters, onCharacterSelect }) => {
  const renderedList = characters.map((Chr, i) => {
    return (
      <CharacterCard
        key={i}
        character={characters[i]}
        onCharacterSelect={onCharacterSelect}
      ></CharacterCard>
    );
  });
  return <div className="CardList">{renderedList}</div>;
};

export default CardList;
