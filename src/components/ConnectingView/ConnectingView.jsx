// libs
import { useEffect, useState } from "react";

// hooks
import useSocket from "../../hooks/useSocket";

// styles
import classes from "./styles.module.css";

// constants
import CONNECTION_STATES from "../../constants/connectionStates";
import GAME_STATES from "../../constants/gameStates";

export default function ConnectingView({ setGameState }) {
  const { isSocketConnected, socketConnect } = useSocket();

  const [connectStatus, setConnectStatus] = useState(CONNECTION_STATES.PENDING);

  const isPending = connectStatus === CONNECTION_STATES.PENDING;
  const isHasError = connectStatus === CONNECTION_STATES.ERROR;

  const changeStateToLobby = () => {
    setGameState(GAME_STATES.LOBBY);
  };

  useEffect(() => {
    if (isSocketConnected) {
      changeStateToLobby();
      return;
    }

    socketConnect(
      () => {
        changeStateToLobby();
      },
      (err) => {
        setConnectStatus(CONNECTION_STATES.ERROR);
        console.error("Cant connect:", err);
      },
    );
  }, []);

  return (
    <div className={classes.root}>
      {isHasError && <p>Cant connect to server</p>}
      {isPending && <p>Connecting to server..</p>}
    </div>
  );
}
