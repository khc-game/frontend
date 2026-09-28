// libs
import { Link } from "react-router-dom";

// routes
import ROUTES from "../../constants/routes";

// styles
import classes from "./styles.module.css";

export default function AuthLoginPage() {
  return (
    <div className={classes.root}>
      <h3 className={classes.h3}>Login</h3>

      <form className={classes.form}>
        <input className={classes.input} type="text" placeholder="username" />
        <input
          className={classes.input}
          type="password"
          placeholder="password"
        />
        <button>login</button>
      </form>

      <p className={classes.tip}>
        Don't have an account? <Link to={ROUTES.AUTH_REGISTER}>register</Link>
      </p>
    </div>
  );
}
