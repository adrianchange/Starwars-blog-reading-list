import URL from "./index.js"
const url = `${URL}people`;

export const getPeople = () => fetch(url);

export const getPeopleInfo = (id) => fetch(`${url}/${id}`); 