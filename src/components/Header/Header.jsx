// hooks
import useUser from "../../hooks/useUser";

// styles
import classes from "./styles.module.css";

export default function Header() {
  const { user } = useUser();

  return (
    <div className={classes.root}>
      <h2>LOGO</h2>
      <div>@{user?.username ?? "#####"}</div>
    </div>
  );
}
