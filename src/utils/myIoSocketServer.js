import io from "socket.io-client";

const { REACT_APP_ENV, REACT_APP_IO_SERVER_LOCAL, REACT_APP_IO_SERVER_REMOTE } =
  process.env;

const mySocket = io(
  REACT_APP_ENV === "legend-dev"
    ? REACT_APP_IO_SERVER_LOCAL
    : REACT_APP_IO_SERVER_REMOTE,
  {
    withCredentials: true,
  }
);

export default mySocket;
