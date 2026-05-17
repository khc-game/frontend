// styles
import classes from './styles.module.css';

export default function Cell({ data, i, j, onCellClick, isRotateMap, whereCanUse }) {

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

  return (
    <div className={`${classes.root} ${ isRotateMap && classes.rotate}`} onClick={onClick} >
      {data?.content && <p>{data?.content?.name}</p>}
      {isCanUseHere && "#-#"}
    </div>
  )
}