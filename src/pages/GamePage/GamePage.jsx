// libs
import { useState } from "react";

// components
import EnterGame from "../../components/EnterGame";

// config
import Socket from "../../config/socket";

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

  const isConnected = connectStatus === connectionStates.connected;
  const isNotConnected = connectStatus === connectionStates.notConnected;
  const isHasError = connectStatus === connectionStates.hasError;
  const isPending = connectStatus === connectionStates.inPending;

  const socketConnect = () => {
    if (connectStatus === connectionStates.inPending) return;

    setConnectStatus(connectionStates.inPending);

    Socket.connect(
      () => {
        setConnectStatus(connectionStates.connected);
      },
      (err) => {
        setConnectStatus(connectionStates.hasError);
        console.error("Cant connect:", err);
      },
    );
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
