import axios from "axios";

const {
  REACT_APP_ENV,
  REACT_APP_API_SERVER_LOCAL,
  REACT_APP_API_SERVER_REMOTE,
} = process.env;

const myAxios = axios.create({
  baseURL:
    REACT_APP_ENV === "legend-dev"
      ? REACT_APP_API_SERVER_LOCAL
      : REACT_APP_API_SERVER_REMOTE,
  withCredentials: true,
  // timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});

export default myAxios;
