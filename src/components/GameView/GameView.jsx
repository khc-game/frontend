// components
import Board from '../Board';

// styles
import classes from './styles.module.css';

export default function GameView({ setGameState }) {
  return (
    <div className={classes.root}>
      <Board />
    </div>
  )
}