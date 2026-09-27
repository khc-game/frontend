// libs
import { Link } from "react-router-dom";

// constants
import ROUTES from "../../constants/routes";

// styles
import classes from "./styles.module.css";

export default function GameMenuPage() {
  return (
    <div className={classes.root}>
      <div className={classes.menu}>
        <h2 className={classes.headText}>Strategy Game</h2>

        <Link className={classes.link} to={ROUTES.GAME}>
          Play
        </Link>

        <Link className={classes.link} to={ROUTES.PREVIEW}>
          Characters
        </Link>
      </div>
    </div>
  );
}
