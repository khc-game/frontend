// hooks
import useSocket from "../../hooks/useSocket";

// constants
import GAME_STATES from "../../constants/gameStates";

// styles
import classes from "./styles.module.css";

export default function MatchmakingView({ setGameState }) {
  const { socketEmit } = useSocket();

  const onCancel = () => {
    socketEmit("cancel");
    setGameState(GAME_STATES.LOBBY);
  };

  return (
    <div className={classes.root}>
      <p>Finding opponent..</p>
      <button onClick={onCancel}>cancel</button>
    </div>
  );
}
