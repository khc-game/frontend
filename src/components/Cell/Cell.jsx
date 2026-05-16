// styles
import classes from './styles.module.css';

export default function Cell({ data, i, j, onCellClick, isRotateMap }) {
  const onClick = () => {
    onCellClick(i, j);
  }

  return (
    <div className={`${classes.root} ${ isRotateMap && classes.rotate}`} onClick={onClick} >
      {data?.content && <p>{data?.content?.name}</p>}
    </div>
  )
}