// libs
import { Outlet } from "react-router-dom";

// styles
import classes from "./styles.module.css";

export default function HomePage() {
  return (
    <div className={classes.root}>
      <Outlet />
    </div>
  );
}
