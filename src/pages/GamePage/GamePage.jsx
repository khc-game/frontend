// libs
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// components
import ConnectingView from "../../components/ConnectingView";
import LobbyView from "../../components/LobbyView";
import MatchmakingView from "../../components/MatchmakingView";
import GameView from "../../components/GameView";

// hooks
import useSocket from "../../hooks/useSocket";

// slices action
import { initGame } from "../../store/slices/game.slice.js";

// constants
import GAME_STATES from "../../constants/gameStates";

// styles
import classes from "./styles.module.css";

export default function GamePage() {
  const { isSocketConnected, socketOn, socketOff } = useSocket();
  const [gameState, setGameState] = useState(
    isSocketConnected ? GAME_STATES.LOBBY : GAME_STATES.CONNECTING,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    socketOn("disconnect", () => {
      setGameState(GAME_STATES.LOBBY);
    });

    socketOn("play", (data) => {
      dispatch(initGame(data));
      setGameState(GAME_STATES.GAME);
    });

    return () => {
      socketOff("play");
      socketOff("disconnect");
    };
  }, []);

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
