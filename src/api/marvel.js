import CryptoJs from "crypto-js";

function getMarvelCharacters(options) {
  const { id, name, offset } = { ...options };

  const KEY = "e7f25e5e35514ae3138167e506312c4d";
  const ts = new Date().getTime();
  const hash = CryptoJs.MD5(
    ts + "65bb2fef124e04d17606097423d6c0a1613a8a78" + KEY
  ).toString();
  const MarvelUrl = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${KEY}&hash=${hash}&offset=${offset}${name}`;

  console.log(MarvelUrl);
  return fetch(MarvelUrl)
    .then((res) => res.json())
    .then((res) => {
      return {
        characters: res.data.results,
      };
    });
}

export default getMarvelCharacters;
