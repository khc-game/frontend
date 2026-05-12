// libs
import { io } from "socket.io-client";

class Socket {
  static socket = null;

  static connect(onConnect = () => {}, onError = () => {}) {
    if (Socket.socket !== null) {
      console.warn("Socket is already connected");
      return;
    }
    
    Socket.socket = io("http://localhost:5000");

    Socket.socket.on("connect_error", (error) => {
      console.error("Connection failed:", error.message);
      Socket.disconnect();
      onError();
    });

    Socket.socket.on("connect", () => {
      onConnect();
    });
  }

  static disconnect() {
    if (Socket.socket === null) return;

    Socket.socket.removeAllListeners();
    Socket.socket.disconnect();
    Socket.socket = null;
  }

  static on(event, listener) {
    if (Socket.socket === null) {
      console.warn("Socket is not connected", event);
      return;
    }

    Socket.socket.on(event, listener);
  }

  static emit(event, message) {
    if (Socket.socket === null) {
      console.warn("Socket is not connected", event, message);
      return;
    }

    Socket.socket.emit(event, message);
  }

  static to(userId, data) {
    if (Socket.socket === null) {
      console.warn("Socket is not connected", userId, data);
      return;
    }

    io.to(userId).emit(data);
  }
}

export default Socket;
