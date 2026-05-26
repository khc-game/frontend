// components
import CharacterImg from '../CharacterImg';

// hooks
import useSocket from '../../hooks/useSocket';

// styles
import classes from './styles.module.css';

export default function Cell({ data, i, j, onCellClick, isRotateMap, whereCanUse }) {
  const { id: userId } = useSocket();

  let isCanUseHere = false;

  if (whereCanUse) {
    for (let c = 0; c < whereCanUse.length; ++c) {
      if (i === whereCanUse[c][0] && j === whereCanUse[c][1]) {
        isCanUseHere = true;
        break;
      }
    }
  }

  const onClick = () => {
    onCellClick(i, j, isCanUseHere);
  }

  const isPlayerCharacter = userId === data?.character?.playerId;

  return (
    <div 
      className={`
        ${classes.root} 
        ${isRotateMap && classes.rotate}
        ${data?.character && (isPlayerCharacter ? classes.myChar : classes.enemyChar)}
        ${isCanUseHere && classes.canUse }
      `} 
      onClick={onClick} 
    >
      {
        data?.character &&
        <>
          <p>{data?.character?.hp}</p>
          <CharacterImg characterKey={data.character.key} className={classes.person}/>
        </>
      }
    </div>
  )
}