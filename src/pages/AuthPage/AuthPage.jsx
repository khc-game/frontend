// libs
import { Outlet } from "react-router-dom";

// styles
import classes from "./styles.module.css";

export default function AuthPage() {
  return (
    <div className={classes.root}>
      (AuthPage)
      <Outlet />
    </div>
  );
}
