// libs
import { Link } from "react-router-dom";

// routes
import ROUTES from "../../constants/routes";

// styles
import classes from "./styles.module.css";

export default function AuthRegisterPage() {
  return (
    <div className={classes.root}>
      <h3 className={classes.h3}>Registration</h3>

      <form className={classes.form}>
        <input className={classes.input} type="text" placeholder="username" />
        <input
          className={classes.input}
          type="password"
          placeholder="password"
        />
        <button>register</button>
      </form>

      <p className={classes.tip}>
        Already have an account? <Link to={ROUTES.AUTH_LOGIN}>login</Link>
      </p>
    </div>
  );
}
