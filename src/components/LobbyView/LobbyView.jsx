// components
import SelectPersons from "../SelectPersons";

// constants
import GAME_STATES from "../../constants/gameStates";

// styles
import classes from "./styles.module.css";

export default function LobbyView({ setGameState }) {
  const onPlay = () => {
    setGameState(GAME_STATES.MATCHMAKING);
  };

  return (
    <div className={classes.root}>
      <SelectPersons onPlay={onPlay}/>
    </div>
  );
}
