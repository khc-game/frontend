// libs
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// components
import Board from '../Board/Board';
import SelectPersons from '../SelectPersons/SelectPersons';

// slices
import {
  setBoard,
  setOpponentId,
  setTurn,
  setRoomId
} from '../../store/slices/game.slice.js'

// config
// import Socket from '../../config/socket';

// styles
import classes from './styles.module.css';

export default function Gameplay() {
  const [gameplayStatus, setGameplayStatus] = useState("personSelect");
  const [isShowPersons, setIsShowPersons] = useState(false);
  const [persons, setPersons] = useState([]);
  const [gameEndMsg, setGameEndMsg] = useState(null);
  const selectedPersonsState = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    // Socket.on("message", (data) => {
    //   console.log(data);
    // });

    // Socket.on("disconnect", () => {
    //   setGameEndMsg("Disconnect from server");
    //   setGameplayStatus("gameEndResult");
    // });
  }, []);

  // handlers
  const onSelectPerson = () => {
    
  }

  const closePersonsMenu = () => {
    setIsShowPersons(false);
    setGameplayStatus("searching game");
  }

  const onCancel = () => {
    // Socket.emit("cancelPlay");
  }

  return (
    <div className={classes.root}>
      {
        isShowPersons &&
        <SelectPersons
          closePersonsMenu={closePersonsMenu}
          persons={persons}
          selectedPersonsState={selectedPersonsState}
        />
      }

      {
        (
          gameplayStatus === "personSelect" ||
          gameplayStatus === "cenceled" ||
          gameplayStatus === "gameEndResult"
        ) &&
        <>
          <button onClick={onSelectPerson}>select persons</button>
          {
            gameplayStatus === "gameEndResult" && <p>{gameEndMsg}</p>
          }
        </>
      }

      {
        gameplayStatus === "searching game" &&
        <>
          <p>Searching game, please wait</p>
          <button onClick={onCancel}>cancel</button>
        </>
      }

      {
        gameplayStatus === "game started" &&
        <Board />
      }
    </div>
  )
}