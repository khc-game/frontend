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
  const { refreshToken, doRefreshToken, clearTokens } = useToken();
  const navigate = useNavigate();

  const rehydrateToken = async () => {
    const isOK = await doRefreshToken();

    if (isOK && refreshToken) {
      navigate(ROUTES.GAME_MENU);
    } else {
      clearTokens();
      navigate(ROUTES.AUTH);
    }
  };

  useEffect(() => {
    rehydrateToken();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      rehydrateToken();
    }, 10 * 60_000);

    return () => {
      clearTimeout(timer);
    };
  }, [refreshToken]);

  return (
    <div className={classes.root}>
      <Outlet />
    </div>
  );
}
