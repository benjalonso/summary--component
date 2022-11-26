import axios from "axios";

//configuracion de una instancia de axios, funciona similar a fetch
const birdsApi = axios.create({
  baseURL: "https://chilean-birds-restapi-production.up.railway.app",
  // baseURL: "https://aves.ninjas.cl/api/",
});

export const getBirds = async () => {
  const res = await birdsApi.get("/birds?page=0&limit=8");
  // const res = await birdsApi.get("/birds");
  // console.log(res.data);
  return res.data;
};

export default getBirds;
