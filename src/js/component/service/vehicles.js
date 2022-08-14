import URL from "./index.js"
const url = `${URL}vehicles`;

export const getVehicles = () => fetch(url);

export const getVehicleInfo = (id) => fetch(`${url}/${id}`); 