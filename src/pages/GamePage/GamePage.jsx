// libs
import { useState } from "react";

// components
import ConnectingView from "../../components/ConnectingView";
import LobbyView from "../../components/LobbyView";
import MatchmakingView from '../../components/MatchmakingView';
import GameView from '../../components/GameView';

// hooks
import useSocket from "../../hooks/useSocket";

// constants
import GAME_STATES from "../../constants/gameStates";

// styles
import classes from "./styles.module.css";

export default function GamePage() {
  const { isSocketConnected } = useSocket();
  const [gameState, setGameState] = useState(
    isSocketConnected ? GAME_STATES.LOBBY : GAME_STATES.CONNECTING,
  );

  const isConnectingState = gameState === GAME_STATES.CONNECTING;
  const isLobbyState = gameState === GAME_STATES.LOBBY;
  const isMatchmakingState = gameState === GAME_STATES.MATCHMAKING;
  const isGameState = gameState === GAME_STATES.GAME;

  return (
    <div className={classes.root}>
      {isConnectingState && <ConnectingView setGameState={setGameState} />}
      {isLobbyState && <LobbyView setGameState={setGameState} />}
      {isMatchmakingState && <MatchmakingView setGameState={setGameState} />}
      {isGameState && <GameView setGameState={setGameState} />}
    </div>
  );
}
