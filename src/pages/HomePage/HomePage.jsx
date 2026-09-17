// libs
import { Link } from "react-router-dom";

// constants
import ROUTES from "../../constants/routes";

// styles
import classes from "./styles.module.css";

export default function HomePage() {
  return (
    <div className={classes.root}>
      <Link to={ROUTES.GAME}>Game</Link>
      <br />
      <Link to={ROUTES.PREVIEW}>Preview</Link>
    </div>
  );
}
