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

  const doConnect = (onConnect, onError) => {
    dispatch(connect({ onConnect, onError }));
  };

  const doDisconnect = () => {
    dispatch(disconnect());
  };

  const doOn = (event, listener) => {
    dispatch(on({ event, listener }));
  };
  
  const doEmit = (event, message) => {
    dispatch(emit({ event, message }));
  };
  
  const doTo = (userId, data) => {
    dispatch(to({ userId, data }));
  };

  return { socket, doConnect, doDisconnect, doOn, doEmit, doTo };
}
