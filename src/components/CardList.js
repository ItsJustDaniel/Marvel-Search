import React from "react";
import CharacterCard from "./CharacterCard";
import "./CardList.css";

const CardList = ({ characters, onCharacterSelect, isLoading }) => {
  const renderedList = characters.map((Chr, i) => {
    return (
      <CharacterCard
        key={i}
        character={Chr}
        onCharacterSelect={onCharacterSelect}
      ></CharacterCard>
    );
  });

  if (isLoading) {
    return (
      <div class="CardList">
        <div class="ui active inverted dimmer">
          <div class="ui text loader">Loading</div>
        </div>
      </div>
    );
  }

  return <div className="CardList">{renderedList}</div>;
};

export default CardList;
