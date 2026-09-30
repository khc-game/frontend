// libs
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// hooks
import useToken from "../../hooks/useToken";

// api
import AuthAPI from "../../api/authAPI";

// routes
import ROUTES from "../../constants/routes";

// styles
import classes from "./styles.module.css";

export default function AuthLoginPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { setTokens } = useToken();

  const onSubmit = async (values) => {
    const { username, password } = values;
    const data = await AuthAPI.login(username, password);

    if (data.status === 200) {
      const { accessToken, refreshToken } = data;
      setTokens(accessToken, refreshToken);
      navigate(ROUTES.HOME);
    } else {
      console.log(data?.message ?? "Can't login");
    }
  };

  return (
    <div className={classes.root}>
      <h3 className={classes.h3}>Login</h3>

      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={classes.input}
          type="text"
          placeholder="username"
          {...register("username", {
            required: "Required",
            pattern: {
              value: /^[a-zA-Z0-9_]{3,20}$/,
              message: "Invalid username",
            },
          })}
        />
        <p>{errors.username && errors.username.message}</p>

        <input
          className={classes.input}
          type="password"
          placeholder="password"
          {...register("password", {
            required: "Required",
            pattern: {
              value: /^[a-zA-Z0-9_]{8,32}$/,
              message: "Invalid password",
            },
          })}
        />
        <p>{errors.password && errors.password.message}</p>

        <button type="submit">login</button>
      </form>

      <p className={classes.tip}>
        Don't have an account? <Link to={ROUTES.AUTH_REGISTER}>register</Link>
      </p>
    </div>
  );
}
