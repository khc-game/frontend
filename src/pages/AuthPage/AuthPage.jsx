// libs
import { Outlet } from "react-router-dom";

// styles
import classes from "./styles.module.css";

export default function AuthPage() {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h2 className={classes.headerText}>Authorization</h2>
      </div>

      <Outlet />
    </div>
  );
}
