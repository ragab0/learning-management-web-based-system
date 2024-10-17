import axios from "axios";

const REACT_APP_ENV = process.env.REACT_APP_ENV;

const myAxios = axios.create({
  baseURL:
    REACT_APP_ENV === "production"
      ? "http://localhost:3500/api/v1"
      : "https://lms-depi-d574ce496085.herokuapp.com/api/v1",
  withCredentials: true,
  // timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});

export default myAxios;
