import { io } from "socket.io-client";

const socket = io("https://musicclubchatapi.herokuapp.com/");

export default socket;
