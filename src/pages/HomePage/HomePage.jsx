// libs
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// hooks
import useToken from "../../hooks/useToken";

// constants
import ROUTES from "../../constants/routes";

// styles
import classes from "./styles.module.css";

export default function HomePage() {
  const { doRefreshToken, clearTokens } = useToken();
  const navigate = useNavigate();

  const updateTokens = async () => {
    const isOK = await doRefreshToken();
    if (isOK) {
      navigate(ROUTES.GAME_MENU);
    } else {
      clearTokens();
      navigate(ROUTES.AUTH);
    }
  };

  useEffect(() => {
    updateTokens();

    const interval = setInterval(
      async () => {
        const isOK = await doRefreshToken();
        if (!isOK) {
          clearTokens();
          navigate(ROUTES.AUTH);
        }
      },
      10 * 60 * 1000,
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={classes.root}>
      <Outlet />
    </div>
  );
}
