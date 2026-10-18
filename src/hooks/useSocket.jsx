// slice actions
import {
  connect,
  disconnect,
  emit,
  on,
  to,
  off,
} from "../store/slices/socket.slice.js";

// hooks
import useRedux from "./useRedux";

export default function useSocket() {
  const [socketData, dispatch] = useRedux("socketSlice");
  const socket = socketData.socket;

  const isSocketConnected = socket?.connected ?? false;

  const socketConnect = (accessToken, onConnect, onError) => {
    dispatch(connect({ accessToken, onConnect, onError }));
  };

  const socketDisconnect = () => {
    dispatch(disconnect());
  };

  const socketOn = (event, listener) => {
    dispatch(on({ event, listener }));
  };

  const socketEmit = (event, message) => {
    dispatch(emit({ event, message }));
  };

  const socketTo = (userId, data) => {
    dispatch(to({ userId, data }));
  };

  const socketOff = (event) => {
    dispatch(off(event));
  };

  return {
    isSocketConnected,
    id: socket?.id ?? null,
    socketConnect,
    socketDisconnect,
    socketOn,
    socketEmit,
    socketTo,
    socketOff,
  };
}
