// slice actions
import {
  connect,
  disconnect,
  emit,
  on,
  to,
} from "../store/slices/socket.slice.js";

// hooks
import useRedux from "./useRedux";

export default function useSocket() {
  const [socketData, dispatch] = useRedux("socketSlice");
  const socket = socketData.socket;

  const isSocketConnected = socket?.connected ?? false;

  const socketConnect = (onConnect, onError) => {
    dispatch(connect({ onConnect, onError }));
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

  return {
    isSocketConnected,
    socketConnect,
    socketDisconnect,
    socketOn,
    socketEmit,
    socketTo,
  };
}
