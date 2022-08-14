import URL from "./index.js"
const url = `${URL}planets`;

export const getPlanets = () => fetch(url);

export const getPlanetInfo = (id) => fetch(`${url}/${id}`); 