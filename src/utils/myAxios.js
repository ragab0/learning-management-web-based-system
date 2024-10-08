import axios from "axios";

const myAxios = axios.create({
  baseURL: "http://localhost:5500/api/v1",
  withCredentials: true,
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});

export default myAxios;
