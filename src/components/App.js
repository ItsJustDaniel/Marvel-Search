import React from "react";
import GetMarvelCharacters from "../api/marvel";
import SearchBar from "./SearchBar";
import "./App.css";
import getMarvelCharacters from "../api/marvel";
import CardList from "./CardList";
import CharacterDetails from "./CharacterDetails";
import RandomButton from "./randomButton";
import LoadMore from "./LoadMore";
import { Element } from "react-scroll";

const imageFound = /image_not_available/gi;
class App extends React.Component {
  state = { characters: [], selectedCard: null, offset: 0, name: null };
  componentDidMount() {
    this.getMarvelResponse(null, null, this.state.offset);
  }

  onCharacterSelect = (e) => {
    this.setState({ selectedCard: e });
  };

  onFormSubmit = (e) => {
    this.getMarvelResponse(null, `&nameStartsWith=${e}`, 0);
  };

  handleRandom = (e) => {
    this.getMarvelResponse(null, null, e);
  };

  getMarvelResponse = (id, name, offset) => {
    getMarvelCharacters({
      id: id,
      name: name,
      offset: offset,
    }).then(({ characters }) => {
      this.setState(
        {
          characters: characters.filter(
            (chr) => !chr.thumbnail.path.match(imageFound)
          ),
          selectedCard: null,
          offset: offset,
          name: name,
        },
        () => {
          console.log(this.state.characters);
        }
      );
    });
  };

  onLoadClick = () => {
    getMarvelCharacters({
      id: null,
      name: this.state.name,
      offset: this.state.offset + 20,
    }).then(({ characters }) => {
      this.setState(
        {
          characters: this.state.characters.concat(
            characters.filter((chr) => !chr.thumbnail.path.match(imageFound))
          ),
          selectedCard: null,
          offset: this.state.offset + 20,
        },
        () => {
          console.log(this.state.characters);
        }
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="title">Marvel Characters</h1>
        <Element id="CharacterDetails" name="CharacterDetails" />
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <RandomButton handleRandom={this.handleRandom} />
        <CharacterDetails selectedCard={this.state.selectedCard} />
        <CardList
          characters={this.state.characters}
          onCharacterSelect={this.onCharacterSelect}
        />
        <LoadMore onLoadClick={this.onLoadClick} />
      </div>
    );
  }
}

export default App;
