// libs
import { useState } from "react";

// components
import EnterGame from "../../components/EnterGame";

// hooks
import useSocket from '../../hooks/useSocket';

// styles
import classes from "./styles.module.css";

export default function GamePage() {
  const connectionStates = {
    connected: "connected",
    notConnected: "notConnected",
    hasError: "hasError",
    inPending: "inPending",
  };

  const [connectStatus, setConnectStatus] = useState(
    connectionStates.notConnected,
  );

  const { socket } = useSocket();
  console.log(socket);

  const isConnected = connectStatus === connectionStates.connected;
  const isNotConnected = connectStatus === connectionStates.notConnected;
  const isHasError = connectStatus === connectionStates.hasError;
  const isPending = connectStatus === connectionStates.inPending;

  const socketConnect = () => {
    if (connectStatus === connectionStates.inPending) return;

    setConnectStatus(connectionStates.inPending);

    // () => {
    //   setConnectStatus(connectionStates.connected);
    // },
    // (err) => {
    //   setConnectStatus(connectionStates.hasError);
    //   console.error("Cant connect:", err);
    // }
  };

  return (
    <div className={classes.root}>
      {isConnected && <EnterGame />}
      {isNotConnected && <button onClick={socketConnect}>connect</button>}
      {isHasError && "Cant connect to game"}
      {isPending && "Connecting.."}
    </div>
  );
}
