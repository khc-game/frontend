// libs
import { useEffect } from "react";

// components
import Board from "../Board";

// hooks
import useSocket from "../../hooks/useSocket";

// styles
import classes from "./styles.module.css";

export default function GameView({ setGameState }) {
  const { socketEmit, socketOn, socketOff, socketDisconnect } = useSocket();

  useEffect(() => {
    socketOn("end:resign", () => {
      console.log("Opponent resigned");
    });

    socketOn("end:leave", () => {
      console.log("Opponent leaved");
    });

    socketOn("end:time", (data) => {
      console.log("Time in up", data);
    });

    socketOn("end:killed", (data) => {
      console.log("Game over. Winner - ", data);
    });

    socketOn("end:draw:opponentDontHasMove", (data) => {
      console.log("Draw. Opponent can't move", data);
    });

    return () => {
      socketOff("end:resign");
      socketOff("end:leave");
      socketOff("end:time");
      socketOff("end:killed");
      socketOff("end:draw:opponentDontHasMove");
      socketDisconnect();
    };
  }, []);

  const onResign = () => {
    socketEmit("resign");
  };

  return (
    <div className={classes.root}>
      <Board />
      <button onClick={onResign}>resign</button>
    </div>
  );
}
