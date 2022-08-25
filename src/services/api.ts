import axios from "axios";

export const api = axios.create({
  baseURL: "https://my-home-api-sidny.herokuapp.com/",
});
