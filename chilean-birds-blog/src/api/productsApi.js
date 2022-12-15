import axios from "axios";

//configuracion de una instancia de axios, funciona similar a fetch
const birdsApi = axios.create({
  // baseURL: "https://chilean-birds-restapi-production.up.railway.app",
  baseURL: "http://localhost:3200",

});

export const getBirds = async (page=0) => {
  const res = await birdsApi.get(`/birds?page=${page}&limit=4`)
  // const res = await birdsApi.get("/birds");
  // console.log(res.data);
  return res.data;
};

export default getBirds;
