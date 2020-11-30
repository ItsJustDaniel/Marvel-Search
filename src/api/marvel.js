import CryptoJs from "crypto-js";

function getMarvelCharacters(options) {
  const { id, name, offset } = { ...options };

  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC;
  const PRIV_KEY = process.env.REACT_APP_PRIVATE;
  console.log(PUBLIC_KEY);
  const ts = new Date().getTime();
  const hash = CryptoJs.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
  const MarvelUrl = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&offset=${offset}${name}`;

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
