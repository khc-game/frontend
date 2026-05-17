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
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedModuleInd, setSelectedModuleInd] = useState(null);
  const [whereCanUse, setWhereCanUse] = useState(null);
  const { id: userId, socketEmit, socketOn, socketOff } = useSocket();
  const [gameData] = useRedux("gameSlice");
  const { map, turn, players } = gameData;
  const opponentId = players[0] === userId ? players[1] : players[0];
  const isRotateMap = players[0] === userId;

  useEffect(() => {
    socketOn("message", (msg) => console.log(msg));
    socketOn("module:canUseAt", (data) => setWhereCanUse(data));
    // TODO: handled response after use

    return () => {
      socketOff("message");
      socketOff("module:canUseAt");
    };
  }, []);

  const onCellClick = (i, j, isCanUseHere = false) => {
    // use module
    if (isCanUseHere) {
      socketEmit("module:use", {
        ind: selectedModuleInd,
        fromI: selectedCharacter.i,
        fromJ: selectedCharacter.j,
        toI: i,
        toJ: j,
      });

      setSelectedCharacter(null);
      setSelectedModuleInd(null);
      setWhereCanUse(null);
      return;
    }

    if (turn !== userId) return;
    const character = map[i][j].content;

    if (character?.playerId !== userId) return setSelectedCharacter(null);
  
    setSelectedCharacter({ character, i, j });
  };

  const onModuleClick = (moduleInd) => {
    setSelectedModuleInd(moduleInd);
    socketEmit("module:select", { 
      i: selectedCharacter.i, 
      j: selectedCharacter.j, 
      ind: moduleInd 
    });
  };

  return (
    <>
      <p>{opponentId} {turn === opponentId && "(turn)"}</p>
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
              whereCanUse={whereCanUse}
            />
          )
        )}
      </div>
      <p>{userId} {turn === userId && "(turn)"}</p>
      {
        selectedCharacter?.character?.modules.map((module, ind) =>
          <button key={ind} onClick={() => onModuleClick(ind)}>
            {module?.title}
          </button>
        )
      }
    </>
  )
}
