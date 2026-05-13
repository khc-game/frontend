// components
import SelectPersons from "../SelectPersons";

// styles
import classes from "./styles.module.css";

export default function LobbyView() {
  return (
    <div className={classes.root}>
      <p>(LobbyView)</p>
      <SelectPersons />
    </div>
  );
}
