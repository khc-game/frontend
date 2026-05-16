// libs
import { useState, useEffect } from 'react';

// components
import Cell from '../Cell/Cell';

// hooks
import useRedux from '../../hooks/useRedux';
import useSocket from '../../hooks/useSocket';

// styles
import classes from './styles.module.css';

export default function Board() {
  const [showedModules, setShowedModules] = useState([]);
  const { id: userId, socketOn, socketOff, socketEmit } = useSocket();
  const [gameData] = useRedux("gameSlice");
  const { map, turn, players } = gameData;
  const opponentId = players[0] === userId ? players[1] : players[0];
  const isRotateMap = players[0] === userId;

  useEffect(() => {
    socketOn("message", (msg) => console.log(msg));
    // TODO - add socket event listneres such as showModules, etc.

    return () => {
      socketOff("message");
    };
  }, []);

  const onResign = () => {
    socketEmit("resign");
  }

  const onCellClick = (i, j) => {
    // is available use cell - useModule
    // check persons's owner - if is player then call selectPerson
    // selected cell is empty - clear selected modules and person
  };

  return (
    <>
      <p>{opponentId}</p>
      <div className={`${classes.root} ${isRotateMap && classes.rotate}`}>
        {map.map((line, i) =>
          line.map((cellData, j) =>
            <Cell
              key={`${i} ${j}`}
              data={cellData}
              i={i}
              j={j}
              onCellClick={onCellClick}
              isRotateMap={isRotateMap}
            />
          )
        )}
      </div>
      <p>{userId}</p>
      <p>Turn: {turn}</p>
      <button onClick={onResign}>resign</button>
      {
        showedModules.map((module, ind) =>
          <button key={ind}>
            {module?.title}
          </button>
        )
      }
    </>
  )
}
