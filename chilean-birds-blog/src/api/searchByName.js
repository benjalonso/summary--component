import axios from "axios";

//configuracion de una instancia de axios, funciona similar a fetch
const birdsApi = axios.create({
  // baseURL: "https://chilean-birds-restapi-production.up.railway.app",
  baseURL: "http://localhost:3200",
});

export const getBirdsBySearching = async (name) => {
  const res = await birdsApi.get(`/birds?name=${name}`);
  return res.data;
};

export default getBirdsBySearching;
